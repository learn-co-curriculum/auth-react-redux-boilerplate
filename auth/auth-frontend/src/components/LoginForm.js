import React from 'react'

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    console.log("I SEE YOU'RE TRYING 2 LOG IN, MY DUDE");
    //TODO: we need some way to log the user in
  }

  render() {
    return(
      <form onSubmit={this.handleLoginSubmit}>
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default LoginForm
