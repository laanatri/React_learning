import React, { Component } from 'react';
import './App.css';
import Titlefont from './Titlefont/Titlefont';

class App extends Component {
  state = {
    fonts: [
      { name: 'verdana'},
      { name: 'times'},
      { name: 'arial'},
      { name: 'georgia'},
      { name: 'helvetica'}
    ]
  }

 
  


  render() {

  

    // const btnClick = () => {
    //   const btnArr = document.querySelectorAll(".Btn");
    //   console.log(btnArr);
    //   btnArr.forEach((btn) => {
    //     btn.addEventListener('click', () => {
    //       console.log("hey");
    //       console.log(document.querySelector(btn.innerHTML));
    //     })
    //   })
    // }



    const message = (font) => {
      console.log("Hello World!");
      console.log(font);
      // console.log(document.querySelector(".Titlefont").setAttribute("name", "hello"));
      document.querySelector(".Titlefont").setAttribute("name", "hello");

      
    }
 

    return (


      <div className="App">


        <h1>Hello World !</h1>


        <Titlefont
        className="Titlefont"
        name={this.state.fonts[0].name}/>


        <button
        className="Btn"
        onClick={() => message(this.state.fonts[0].name)}>
          {this.state.fonts[0].name}
        </button>


        <button
        className="Btn"
        onClick={() => message(this.state.fonts[1].name)}>
          {this.state.fonts[1].name}
        </button>


      </div>
    );

    
  }
}

export default App;
