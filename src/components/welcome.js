import React from 'react'

// CLASS COMPONENT
class Welcome extends React.Component{
    render(){
    return (
    <h1> Welcome {this.props.name} |^| {this.props.heroname} </h1>
    )
    }
} 


export default Welcome
