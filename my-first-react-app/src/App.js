import React, { Component } from 'react';
import './App.css';
// import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'bhjtjf', name: 'Max', age: 28 },
      { id: 'kukgjg', name: 'Manu', age: 25 },
      { id: 'hgjhgh', name: 'Stephanie', age: 32 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }
  // state ne "change" pas

  // switchNameHandler = (newName) => {
  //   // console.log("was clicked !");
  //   // Don't Do This =>>> this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 25 },
  //       { name: 'Stephanie', age: 33 }
  //     ]
  //   })
  // }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons}); // updating the state
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //   </div>
    // ce n'est pas du html mais du js(jsx) au final, qui est compilé et ressemble au code ci-dessous 
    // );
    // Ce code est "similaire" mais on utilise plus la syntaxe du dessus
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I'm a React App'));

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working !</p>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
        {/* <button 
        style={style}
        onClick={() => this.switchNameHandler('Maximilian !')}>
          Switch Name
        </button> */}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;




// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 25 },
//       { name: 'Stephanie', age: 32 }
//     ],
//     otherState: 'some other value'
//   });

//   console.log(personsState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 25 },
//         { name: 'Stephanie', age: 33 }
//       ],
//       // Avec setState, ça merge les infos et avec setPersonsState, ça remplace la totalité !!!
//       otherState: personsState.otherState
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>Petit paragraphe</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person 
//         name= {personsState.persons[0].name} 
//         age= {personsState.persons[0].age}/>
//       <Person 
//         name= {personsState.persons[1].name} 
//         age= {personsState.persons[1].age}>
//           My hobbies: Racing
//       </Person>
//       <Person 
//         name= {personsState.persons[2].name} 
//         age= {personsState.persons[2].age}/>
//     </div>
//   );
// }
