import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from 'react'
import { blogReducer, Issue, Profile } from '../reducer/BlogDate'
import { api } from '../lib/axios'
import {
  loadUserProfileAction,
  loadIssuesAction,
  viewPostCompleteAction,
} from '../reducer/actions'

interface BlogProviderProps {
  children: ReactNode
}

interface ContextBlogType {
  profile: Profile
  issues: Issue[]
  viewPost: Issue
  viewPostComplete: (data: Issue) => void
}

export const BlogProvider = createContext({} as ContextBlogType)

export function GitBlogContextProvider({ children }: BlogProviderProps) {
  const [GitBlogState, dispatch] = useReducer(blogReducer, {
    profile: {
      name: '',
      avatar: '',
      bio: '',
      login: '',
      company: '',
      follower: 0,
      url: '',
    },
    issues: [],
    viewPost: {
      id: 0,
      title: '',
      created_at: '',
      comments: 0,
      owner: '',
      body: '',
    },
  })

  const { profile, issues, viewPost } = GitBlogState

  const loadDataProfile = useCallback(async () => {
    const response = await api.get('https://api.github.com/users/elielassis7')
    const data = response.data
    const profileData: Profile = {
      name: data.name,
      avatar: data.avatar_url,
      bio: data.bio,
      login: data.login,
      company: data.company,
      follower: data.followers,
      url: data.html_url,
    }
    dispatch(loadUserProfileAction(profileData))
  }, [])

  const loadDataIssues = useCallback(async () => {
    const response = await api.get(
      'https://api.github.com/repos/elielassis7/GitHub-Blog/issues',
    )
    const arrayIssue = response.data
    const newArrayIssue: Issue[] = arrayIssue.map(
      (issue: {
        number: number
        title: string
        created_at: string
        comments: number
        user: { login: string }
        body: string
      }) => ({
        id: issue.number,
        title: issue.title,
        created_at: issue.created_at,
        comments: issue.comments,
        owner: issue.user.login,
        body: issue.body,
      }),
    )
    dispatch(loadIssuesAction(newArrayIssue))
  }, [])

  function viewPostComplete(data: Issue) {
    viewPostCompleteAction(data)
  }

  useEffect(() => {
    async function fetchDataProfile() {
      await loadDataProfile()
    }
    fetchDataProfile()
    async function fetchDataIssues() {
      await loadDataIssues()
    }
    fetchDataIssues()
  }, [loadDataProfile, loadDataIssues])

  return (
    <BlogProvider.Provider
      value={{ profile, issues, viewPost, viewPostComplete }}
    >
      {children}
    </BlogProvider.Provider>
  )
}
