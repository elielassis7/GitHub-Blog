import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from 'react'
import { BlogState, blogReducer, Profile } from '../reducer/BlogDate'
import { api } from '../lib/axios'
import { loadUserProfileAction } from '../reducer/actions'

interface BlogProviderProps {
  children: ReactNode
}

interface ContextBlogType {
  profile: Profile
}

export const BlogProvider = createContext({} as ContextBlogType)

export function GitBlogContextProvider({ children }: BlogProviderProps) {
  const [GitBlogState, dispatch] = useReducer(blogReducer, {
    profile: {},
  })

  const { profile } = GitBlogState

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
    }
    dispatch(loadUserProfileAction(profileData))
  }, [])

  useEffect(() => {
    async function fetchDataProfile() {
      await loadDataProfile()
    }
    fetchDataProfile()
  }, [loadDataProfile])

  return (
    <BlogProvider.Provider value={{ profile }}>
      {children}
    </BlogProvider.Provider>
  )
}
