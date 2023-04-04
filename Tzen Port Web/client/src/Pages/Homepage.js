import React from 'react';
import "../PagesCss/Homepage.css"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller }from 'react-scroll';

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
        </div>           
        </div>
        <a className="test1"><Link activeClass="active"  to="test1" spy={true} smooth={true} duration={500}>Let's Begin</Link></a>

    </div>
    )
}

export default Homepage