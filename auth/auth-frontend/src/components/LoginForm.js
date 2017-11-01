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
    //TODO: we need some way to log the user in
  }

  render() {
    console.log('rendering login');
    return(
      <form>
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default LoginForm
