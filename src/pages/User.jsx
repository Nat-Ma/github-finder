import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'

const User = () => {
    const { username } = useParams()
    const { getSingleUser, user } = useContext(GithubContext)

    useEffect(() => {
        getSingleUser(username)
    }, [])

  return (
    <div>
      {user.login}
      <img src={user.avatar_url} alt="Profile" />
    </div>
  )
}

export default User
