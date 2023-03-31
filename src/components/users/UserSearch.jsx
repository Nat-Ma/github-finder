import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

const UserSearch = () => {
    const [text, setText] = useState('')
    const { users, searchUsers, clearUsers } = useContext(GithubContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            alert('Please enter some text')
        } else {
            searchUsers(text)
            setText('')
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input 
                                type="text" 
                                className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                                placeholder="Search"
                                value={text}
                                onChange={e => setText(e.target.value)}
                            />
                            <button 
                                type="submit"
                                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {!!users.length && (
                <div>
                    <button onClick={clearUsers} className="btn btn-ghost btn-lg">Clear</button>
                </div>
            )}
        </div>
    )
}

export default UserSearch
