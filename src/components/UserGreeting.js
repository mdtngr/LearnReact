import React, { Component } from 'react'

class UserGreeting extends Component {
constructor(props) {
    super(props)

    this.state = {

        isLoggedIn: false
         
    }
}


// USING IF-ELSE--------------------------->

//  render()
//      {
//          let message
                 

//         if(this.state.isLoggedIn)
//         {
//             message = <div>Welcome  Mudit!</div>
//         }

//         else
//         {
//         message = <div>Welcome Guest!</div>
//         }


//         return (message)

        
//     }





// USING TERNARY OPERATOR--------------------------->

render()
{
    return(

        this.state.isLoggedIn?(<div>Mudit!!</div>):(<div>Guest</div>)

    )
   
}


// USING SHORT CIRCUIT OPERATOR--------------------------->

// render()
// {
//     return(

//         this.state.isLoggedIn && <div>Welcome Mudit</div>

//     )
   
// }



}

export default UserGreeting
