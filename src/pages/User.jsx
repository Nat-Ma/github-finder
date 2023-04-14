import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
// import { FaCodepen, FaStore, FaUserFriends, FaUser } from 'react-icons/fa'
import Spinner from '../components/layout/Spinner'
import RepoList from '../components/repos/RepoList'
import { getUserAndRepos } from '../context/github/GithubActions'

const User = () => {
    const { username } = useParams()
    const { user, repos, dispatch, loading } = useContext(GithubContext)

    useEffect(() => {
      dispatch({ type: 'SET_LOADING'})

      const fetchUserData = async () => {
          const userData = await getUserAndRepos(username)

          dispatch({ type: 'GET_USER_AND_REPOS', payload: userData })
        }

        fetchUserData()
    }, [dispatch, username])

  return (
    <div>
      {loading && <Spinner></Spinner>}
      <div className="w-dull mx-auto lg:w-10/12">
        <Link className="btn btn-ghost">Back to search</Link>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={user.avatar_url} alt="Profile" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{user.name}</h2>
                <p>{user.login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {user.name}
                <div className="ml-2 mr-1 badge badge-success">
                  {user.type}
                </div>
                {user.hireable && (
                  <div className="mx-1 badge badge-info">
                    Hireable
                  </div>
                )}
              </h1>
              <p>{user.bio}</p>
              <div className="mt-4 card-actions">
                <a href={user.html_url} target="_blank" rel="noreferrer" className="btn btn-outline">Visit Github Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RepoList repos={repos} />
    </div>
  )
}

export default User
