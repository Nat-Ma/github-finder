import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GH_URL
const GITHUB_TOKEN = process.env.REACT_APP_GH_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { "Authorization": `Bearer ${GITHUB_TOKEN}` }
})

export const getUserAndRepos = async (username) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${username}`),
        github.get(`/users/${username}/repos`)
    ])
    
    return { user: user.data, repos: repos.data }
}

// Get search results
export const searchUsers = async (text) => {
    const params = new URLSearchParams({ q: text })

    const response = await github.get(`/search/users?${params}`)
    return response.data.items;
}

