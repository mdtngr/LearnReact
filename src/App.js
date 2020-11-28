
import React from 'react'
import logo from './logo.svg';
import './App.css';

// import Hello from './components/Hello'
// import Greet from './components/greet'
// import Welcome from './components/welcome'
// import Message from './components/message'
// import Counter from './components/counter'
// import Functionclick from './components/functionclick';
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import Stylesheet from './components/Stylesheet'
// import Inline from './components/Inline'
// import './appStyles.css'
// import styles from './appStyles.module.css'

import Form from './components/Form'

function App() {
  return(

    <div className="App">
    <header className="App-header">
      
    <img src={logo} className="App-logo" alt="logo"></img>
    <h1>React Notes!</h1>
    <p>Open the source code play with the commented code to understand how amazing React is!!</p>
    
      {/* <Form /> */}
      {/* <h1 className= 'error' >Error</h1> */}
      {/* <h1 className= {styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary = {true} /> */}
      {/* <NameList />      */}
      {/* <UserGreeting /> */}      
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Functionclick /> */}
      {/* <ClassClick /> */}
      {/* <img src="./logo.svg"></img> */}
      {/* <Counter /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Greet  name="Tim" heroname="One"><p> This is children props </p></Greet> */}
      {/* <Welcome  name="Robin" heroname="Three"/>       */}
      </header> 
    </div>
  );
}

export default App;
