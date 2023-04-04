import React from 'react';
import "../PagesCss/myWork.css"




class Mywork extends React.Component {
    render() {
      const names = ['Alice', 'Bob', 'Charlie'];
      const nameListItems = names.map((name) => <li key={name}>{name}</li>);
  
      return (
        <div name="test1"  className='Main'> 
          <h1 className='Title'>My services</h1>
          <ul className='Services'>
            {nameListItems}
          </ul>
        </div>
      );
    }
  }

export default Mywork