import React from 'react';
import "../components css/billboard.css"

export default function billBoard() {
    return (
        <div className = 'main-container'>
        <div className = 'static-container'>
            <h1 className = 'static'> Hi, I am </h1>
        </div>
        
        <div className = 'moving-text-container'>
            <div className = 'moving-text'>
                <p> Tzen  </p>
                <p> a photographer </p>
                <p> a dog lover </p>
                <p> a travler</p>
            </div>
        </div>
        </div>
        );
  }


