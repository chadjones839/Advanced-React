import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>-- React App --</h1>
      <Person name="Chad" age="33" />
      <Person name="Harvey" age="77" > My Hobbies: Whiskey</Person>
      <Person name="Sarah" age="30" />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React App'));
}

export default App;
