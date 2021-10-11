import React from 'react'
import "./loading.css";
const Loading = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="face face1">
                    <div className="circle"></div>
                </div>
                <div className="face face2">
                    <div className="circle"></div>
                </div>
            </div>

        </div>
    )
}

export default Loading
