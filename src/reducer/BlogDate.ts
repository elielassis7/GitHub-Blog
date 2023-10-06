import { ActionTypesBlog } from './actions'
import { produce } from 'immer'

export interface Profile {
  name: string
  avatar: string
  bio: string
  login: string
  company: string
  follower: number
}

export interface BlogState {
  profile: Profile
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function blogReducer(state: BlogState, action: any) {
  switch (action.type) {
    case ActionTypesBlog.LOAD_PROFILE:
      return produce(state, (draft) => {
        draft.profile = action.payload
      })

    default:
      return state
  }
}
