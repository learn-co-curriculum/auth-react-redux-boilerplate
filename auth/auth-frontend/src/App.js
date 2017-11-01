import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import Profile from './components/Profile'
import Login from './components/Login'
import './App.css';

const App = () => {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {/* <Route exact path="/profile" component={TODO: create an HOC that renders out the profile if user is logged in} /> */}
      <Route exact path="/login" componnet={LoginForm} />
    </div>
  )
}

export default App;
