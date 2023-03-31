import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import GithubContext from '../../context/github/GithubContext'

const UserSearch = () => {
    const [text, setText] = useState('')
    const { users, searchUsers, clearUsers } = useContext(GithubContext)
    const { alert, setAlert } = useContext(AlertContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            setAlert('Please enter a search term.', 'error')
        } else {
            searchUsers(text)
            setAlert('YAAAAYYYYY', 'success')
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
                {alert && <p>{alert.message}</p>}
            </div>
            {users.length > 0 && (
                <div>
                    <button onClick={clearUsers} className="btn btn-ghost btn-lg">Clear</button>
                </div>
            )}
        </div>
    )
}

export default UserSearch
