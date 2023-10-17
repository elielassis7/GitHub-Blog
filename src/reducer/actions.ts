import { Profile, Issue } from './BlogDate'

export enum ActionTypesBlog {
  LOAD_PROFILE = 'LOAD_PROFILE',
  LOAD_ISSUES = 'LOAD_ISSUES',
  VIEW_POST_COMPLETE = 'VIEW_POST_COMPLETE',
  RESET_POST_COMPLETE = 'RESET_POST_COMPLETE',
  FILTER_POST = 'FILTER_POST',
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

export function viewPostCompleteAction(data: Issue) {
  return {
    type: 'VIEW_POST_COMPLETE',
    payload: data,
  }
}

export function resetPostCompleteAction(data: Issue) {
  return {
    type: 'RESET_POST_COMPLETE',
    payload: data,
  }
}

export function filterPostsAction(data: Issue[]) {
  return {
    type: 'FILTER_POST',
    payload: data,
  }
}
