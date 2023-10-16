import { ActionTypesBlog } from './actions'
import { produce } from 'immer'

export interface Profile {
  name: string
  avatar: string
  bio: string
  login: string
  company: string
  follower: number
  url: string
}

export interface Issue {
  id: number
  title: string
  created_at: string
  comments: number
  owner: string
  body: string
  url: string
}

export interface BlogState {
  profile: Profile
  issues: Issue[]
  viewPost: Issue
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function blogReducer(state: BlogState, action: any) {
  switch (action.type) {
    case ActionTypesBlog.LOAD_PROFILE:
      return produce(state, (draft) => {
        draft.profile = action.payload
      })

    case ActionTypesBlog.LOAD_ISSUES:
      return produce(state, (draft) => {
        draft.issues = action.payload
      })

    case ActionTypesBlog.VIEW_POST_COMPLETE:
      return produce(state, (draft) => {
        draft.viewPost = action.payload
        console.log(draft.viewPost)
      })

    default:
      return state
  }
}
