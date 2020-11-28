import React from 'react'
// FUNCTIONAL COMPONENT

const Greet = (props) =>{

    console.log(props)

    return(
        <div>
        <h1>Hello {props.name} | {props.heroname}</h1>
        {props.children}
        </div>
    )
}

export default Greet
