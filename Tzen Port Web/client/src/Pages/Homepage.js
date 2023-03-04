import React from 'react';
import "../PagesCss/Homepage.css"


const Homepage = () => {
    return (
        <div className='Homepage'>
            <div className='content'>
            <div className = 'main-container'>
            <div className = 'static-container'>
                <h1 className = 'static'> Hi, I am </h1>
            </div>

            <div className = 'moving-text-container'>
                <div className = 'moving-text'>
                    <p id ="first-iteam" > Tzen</p>
                    <p> a photographer </p>
                    <p> a dog lover </p>
                    <p> a travler</p>
                </div>
            </div>
        </div>            </div>
        </div>
    )
}

export default Homepage