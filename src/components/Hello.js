import React from 'react'

const Hello = () => {
    // return (
    //     <div id="hello" calssName="dumyclass">
    //         <h1>
    //             Hello Mudit
    //         </h1>

    //     </div> 
    // )

    return React.createElement('div',
         {id :"hello", className:"dummyclass"},
            
            React.createElement('h1',
                null,
                "This is Hello .js")
            )
}

export default Hello