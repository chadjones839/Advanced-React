import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Chud", age: 33 },
      { name: "Harvard", age: 77 },
      { name: "Sarag", age: 30 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked')
    // DON'T DO THIS: this.state.persons[0].name ="Chadz"
    this.setState({
      persons: [
        { name: "Chad", age: 33 },
        { name: "Harvey", age: 77 },
        { name: "Sarah", age: 30 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>-- React App --</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies: Whiskey</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React App'));
  }
}

export default App;
