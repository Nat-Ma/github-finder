import React from 'react'
import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'

const UserResults = () => {
    const { users, loading } = useContext(GithubContext)
    
    const userElements = users.map(user => (
        <Link to={`/user/${user.login}`} key={user.id} className="basis-1/4 grow card w-96 bg-base-100 shadow-xl mx-2 mb-4">
            <li>
                <figure><img src={user.avatar_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{user.login}</h2>
                </div>
            </li>
        </Link>
    ))

  return (
    <div>
        {loading && (
            <Spinner></Spinner>
        )}
        {!!users.length && (
            <ul className="flex flex-wrap">
                {userElements}
            </ul>
        )}
    </div>
  )
}

export default UserResults
