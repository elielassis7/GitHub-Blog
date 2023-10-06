import { Profile } from './BlogDate'

export enum ActionTypesBlog {
  LOAD_PROFILE = 'LOAD_PROFILE',
}

export function loadUserProfileAction(data: Profile) {
  return {
    type: 'LOAD_PROFILE',
    payload: data,
  }
}
