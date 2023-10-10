import { Profile, Issue } from './BlogDate'

export enum ActionTypesBlog {
  LOAD_PROFILE = 'LOAD_PROFILE',
  LOAD_ISSUES = 'LOAD_ISSUES',
}

export function loadUserProfileAction(data: Profile) {
  return {
    type: 'LOAD_PROFILE',
    payload: data,
  }
}

export function loadIssuesAction(data: Issue[]) {
  return {
    type: 'LOAD_ISSUES',
    payload: data,
  }
}
