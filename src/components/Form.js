import React, { Component } from 'react'

class Form extends Component {

constructor(props) {
    super(props)

    this.state = {
        username : ''  ,
        comment: '',
        topic: 'react'

    }

    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.handleTopicChange =  this.handleTopicChange.bind(this)
    this.handleUsernameChange =  this.handleUsernameChange.bind(this)
}

handleUsernameChange = (event) => {

    this.setState({
        username: event.target.value
     }, ()=> {console.log(this.username)})    
}

handleCommentChange = (event) =>{
    this.setState(
        {
            comment: event.target.value
        }, ()=> {console.log(this.comment)}
    )
}

handleTopicChange = (event) =>{
    this.setState(
        {
            topic: event.target.value
        }, ()=> {console.log(this.topic)}
    )
}


handleSubmit=(event) =>{
    alert(`${this.state.username} ${this.state.topic} ${this.state.comment}`)
    event.preventDefault()
}


    render() {

        // Destructuring
    const {username, comment, topic} = this.state

        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username </label>
                <input type='text' 
                        value= {username} 
                        onChange= {this.handleUsernameChange} 
                        />
                
            </div>
<br />
            <div>
            <label>Comment </label>
            <textarea value = {comment} onChange= {this.handleCommentChange} ></textarea>

            </div>
            
<br />
            <label>Topic </label>
            <select value={topic}
                    onChange={this.handleTopicChange} 
                    >
                <option value = "react">React</option>
                <option value = "angular">Angular</option>
                <option value = "vue">Vue</option>
            </select>
<br />
<br />
            <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form
