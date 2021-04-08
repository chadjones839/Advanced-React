import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

// This is a stateful component

const App = props => {
  // Array Destructuring
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Chud", age: 33 },
      { name: "Harvard", age: 77 },
      { name: "Sarag", age: 30 }
    ],
    // setState will not merge properties if they aren't declared in the switchNameHandler function
    otherState: 'some other value'
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 33 },
        { name: "Harvey", age: 77 },
        { name: "Sarah", age: 30 }
      ]
    })
  }

  console.log(personsState)
  
  return (
    <div className="App">
      <h1>-- React App --</h1>
      <button onClick={switchNameHandler.bind(personsState, "Chad")}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(personsState, "Chad!")} >My Hobbies: Whiskey
      </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
    </div>
  );
};

export default App;


