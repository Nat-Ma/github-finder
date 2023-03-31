import { createContext, useReducer } from "react"
import { redirect } from "react-router-dom"
import GithubReducer from "./GithubReducer"

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GH_URL
const GITHUB_TOKEN = process.env.REACT_APP_GH_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Get search results
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })
        
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const { items } = await response.json()
        // setUsers to data inside fn resolves promise
        dispatch({ type: 'GET_USERS', payload: items })
    }

    const getSingleUser = async (username) => {
        setLoading()
        
        const response = await fetch(`${GITHUB_URL}/users/${username}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        if (!data) {
            return redirect('/notfound')
        }
        dispatch({ type: 'GET_SINGLE_USER', payload: data })
    }

    const setLoading = () => dispatch({ type: 'SET_LOADING' })
    const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                user: state.user,
                searchUsers,
                clearUsers,
                getSingleUser,
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext

