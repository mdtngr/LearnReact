import React, { Component } from 'react'

class EventBind extends Component {

constructor(props)
{
    super(props)
    this.state ={message: 'Hello'}

    // Approach 4 - Binding inside the constructor
    // this.clickHandler  = this.clickHandler.bind(this)
}  

// Approach 5- Use arrow function as a class property (CORRECT METHOD)
clickHandler= () =>{this.setState({message: "The button is Clicked!!!"}, () => console.log(this.state.message))} 


// THIS CAUSES ERROR( due to behaviour of the this keyword)

// clickHandler()
// {
//     this.setState({message: "The button is Clicked!!!" })
//     console.log("button clicked")

// }



    render() {
        return (<div>

                <div>{this.state.message}</div>

    {/* Approach 1- Without using the bind keyword  (WRONG!!!) */}

    <button onClick={this.clickHandler}>Press Here</button>

       <br />             
       <br />

    {/* Approach 2 - Binding in Render*/}
    {/*  EVERY UPDATE TO THE STATE WILL CAUSE THE ELEMENT TO RE-RENDER THIS CAUSES PROBLEMS WHEN WE HAVE CHILDPROPS */}

    <button onClick={this.clickHandler.bind(this)}>Press Here</button>

    <br />             
       <br />


    {/* Approach 3 - Arrow function in Render*/}                
    {/* PERFORMANCE IMPLICATIONS IN SOME CASES  BUT PROVES TO BE THE EASIEST WHEN PASSING PARAMS*/}

    <button onClick={() => this.clickHandler()}>Press Here</button>


            </div>
        )
    }
}

export default EventBind
