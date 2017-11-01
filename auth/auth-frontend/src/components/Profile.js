import React from 'react'
//TODO: How does this component know about the current user? Wher does it get its props from?

const Profile = (props) => {
  return (
    <h1>{props.username}</h1>
  )
}

export default Profile
