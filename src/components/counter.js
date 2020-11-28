import React from 'react'

class Counter extends React.Component {

constructor(props) {
    super(props)

    this.state = {
        count: 0
         
    }
}

increment()
{
// this.setState

// CORRECT
this.setState((prevState) => ({ count: prevState.count +1 }),  () => {console.log("Callback Value", this.state.count)})


// WRONG this doesnt take care of the previous state

//     this.setState({
    
//             count : this.state.count + 1
//         },

//         () => {
//             console.log("Callback Value", this.state.count)   
//         }
//         )

}

incrementFive()
{
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}

    render(){
        return (
            <div>
                count- {this.state.count}
                <br />                
                <br />                
                <button onClick={() => {this.incrementFive()}}>Increment</button>
            </div>
        )
    }
}

export default Counter
