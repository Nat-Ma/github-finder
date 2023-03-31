import React from 'react'
import UserSearch from '../components/users/UserSearch'
import UserResults from '../components/users/UserResults'

const Home = () => {
  return (
    <>
      <h1 className="text-6xl mb-4">Home</h1>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home
