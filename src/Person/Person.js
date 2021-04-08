import React from 'react';
import './Person.css';

// This is a stateless component

const person = ( props ) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed}></input>
    </div>
  )
}

export default person;