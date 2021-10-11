import Navbar from './header/Navbar';
import Example from './components/Example';
import Products from './products/Products';
import Notfound from './components/Notfound';
import Showrooms from './components/Showrooms';
import Brand from './products/Brand';
import './App.css';
import { Switch } from "react-router";
import {useEffect,useState,useRef} from "react";
import {Route} from "react-router-dom";
import Linkprd from "./products/Linkprd";
import Footer from './footer/Footer';
import {FaArrowCircleUp} from "react-icons/fa";
import { Link } from 'react-scroll';
function App() {
  const [data,setData]=useState([]);
  const dataObject=Object.values(data);
  const [addItems,setAddItems]=useState([]);
  const [searchTerm,setSearchTearm]=useState("");
  const onChangeInput=(item)=>{
    setSearchTearm(item)
  }
  let dataHasBeenProcessed = [
    {
      selection: "apple",
      dataSelection: [],
    },
    {
      selection: "sam sung",
      dataSelection: [],
    },
    {
      selection: "xiaomi",
      dataSelection: [],
    },
    {
      selection: "oppo",
      dataSelection: [],
    },
    {
      selection: "nokia",
      dataSelection: [],
    },
    {
      selection: "realme",
      dataSelection: [],
    },
    {
      selection: "vsmart",
      dataSelection: [],
    },
    {
      selection: "asus",
      dataSelection: [],
    },
    {
      selection: "vivo",
      dataSelection: [],
    },
    {
      selection: "oneplus",
      dataSelection: [],
    },
    {
      selection: "nubia",
      dataSelection: [],
    },
  ];
  let selection = Object.values(dataObject);
  for (let j = 0; j < dataHasBeenProcessed.length; j++) {
    for (let i = 0; i < selection.length; i++) {
      if (i === j) {
        dataHasBeenProcessed[j].dataSelection = selection[i];
      }
    }
  }
  const [products,setProducts]=useState(null);
  const onAddItem=(item)=>{
    setProducts(item);
  }
  
  useEffect(()=>{
    fetch(`https://data-phone.herokuapp.com/api/phone`)
    .then((res)=>{
      return res.json()
    })
    .then((resJson)=>{
      setData(resJson);
    })
  },[]);
  
  const onAddCart=(item)=>{
    console.log(item);
    
    const obj=Object.values(item.payNow);
    console.log(obj)
    const exsit=addItems.find((nameItem)=>{
      return nameItem.item.payNow.products.name===item.payNow.products.name && nameItem.item.payNow.colorItem.color===item.payNow.colorItem.color && nameItem.item.capacity===item.capacity;
    })
    if(exsit){
      
      setAddItems(addItems.map((x)=>{
        return x.item.payNow.products.name===item.payNow.products.name && x.item.payNow.colorItem.color===item.payNow.colorItem.color&& x.item.capacity===item.capacity?{...exsit,qty:exsit.qty+1}:x
      }))
    }else{
      setAddItems([...addItems,{item,qty:1}])
      console.log("2")
    }
 
    
    
    if(JSON.stringify(item.payNow)==="{}"){
      alert("Vui lòng chọn màu sản phẩm!");
      setAddItems([...addItems]);
    }
  }
  console.log(addItems)
  
  const plusItems=(item)=>{
    console.log(item);
    
    const exsit =addItems.find((x)=>{
      return x.item.payNow.products.name === item.item.payNow.products.name && x.item.payNow.colorItem.color === item.item.payNow.colorItem.color
      
    })
    if(exsit){
      setAddItems(addItems.map((x)=>{
        return x.item.payNow.products.name === item.item.payNow.products.name && x.item.payNow.colorItem.color === item.item.payNow.colorItem.color ?{...exsit,qty:exsit.qty+1}:x
      }))
    }
  }
  const minusItems=(item)=>{
    console.log(item);
    console.log(item.item.payNow.products.name);
    
    const exsit =addItems.find((x)=>{
      return x.item.payNow.products.name === item.item.payNow.products.name && x.item.payNow.colorItem.color === item.item.payNow.colorItem.color && x.item.capacity===item.item.capacity;
      
    })
    
    if(exsit){
      if(exsit.qty<=1){
        const condition =addItems.filter((x)=>{
          return  (x.item.payNow.colorItem.color !== item.item.payNow.colorItem.color || x.item.capacity!==item.item.capacity);
        })
        if(condition){
          setAddItems(condition)
        }

      }else{
        setAddItems(addItems.map((x)=>{
          
          return x.item.payNow.products.name === item.item.payNow.products.name && x.item.payNow.colorItem.color === item.item.payNow.colorItem.color && x.item.capacity===item.item.capacity ?{...exsit,qty:exsit.qty-1}:x;
          
        }))

      }
      

      

      
      
      
    }
   
    
  }
  const removeItem=(item)=>{
    console.log(item);
    const exsit =addItems.filter((x)=>{
      return  (x.item.payNow.colorItem.color !== item.item.payNow.colorItem.color || x.item.capacity!==item.item.capacity);
      
    })
    if(exsit){
      setAddItems(exsit)
    }
  }
  //scroll
  const prevPos=useRef(0);
  const [scrollDown,setScrollDown]=useState(false);
  useEffect(()=>{
    const handleScroll=(event)=>{
      console.log(document.documentElement.scrollTop);
      const isScrollUp=document.documentElement.scrollTop<=prevPos.current;
      console.log(isScrollUp);
      setScrollDown(isScrollUp);
      prevPos.current=document.documentElement.scrollTop;
      if(document.documentElement.scrollTop===0){
        setScrollDown(false)
      }
      // if(document.documentElement.scrollTop>=3000){
      //   setScrollDown(true)
      // }
    }
    
    document.addEventListener("scroll",handleScroll);
    return ()=>{
      document.removeEventListener("scroll",handleScroll)
    };
  },[])


  return (
     
    <div className="App">
      <div id="navbarid">
      <Navbar  addItems={addItems} minusItems={minusItems} plusItems={plusItems} removeItem={removeItem} onChangeInput={onChangeInput}/>
      </div>
      
      <Example/>
      <Switch>
        <Route path="/" exact render={()=><Products searchTerm={searchTerm} dataHasBeenProcessed={dataHasBeenProcessed} onAddItem={onAddItem}/>}/>
        <Route path="/sp/:name"  render={()=><Linkprd dataHasBeenProcessed={dataHasBeenProcessed} product={products} onAddCart={onAddCart}/>} />
        <Route path="/brand/:title" render={()=><Brand />}/>
        <Route path="/showrooms" render={()=><Showrooms />}/>
        <Route path="*" render={()=><Notfound />} />
      </Switch>
      <Link className="dropdown" to="navbarid" smooth={true} duration={600}>{scrollDown?<div className="scroll"><FaArrowCircleUp/></div>:""}</Link>
      <div style={{marginTop:"100px"}}><Footer/></div>
      
    </div>
     
  );
}

export default App;

        // <Products dataHasBeenProcessed={dataHasBeenProcessed}/>
