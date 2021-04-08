import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Chad", age: 33 },
      { name: "Harvey", age: 77 },
      { name: "Sarag", age: 30 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>-- React App --</h1>
        <button>
          
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies: Whiskey</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React App'));
  }
}

export default App;
