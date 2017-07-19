// Action Creators and Constants (Redux)

/*
 * action types
 */
import fetch from 'isomorphic-fetch'
export const REQUEST_ISSUES = 'REQUEST_ISSUES';
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES';
/*
 * action creators
 */

export function requestIssues(shouldForce) {
  shouldForce = shouldForce || false;
  return { type: REQUEST_ISSUES, shouldForce };
}

export function receiveIssues(issuesJson) {
  return { type: RECEIVE_ISSUES, issues: issuesJson };
}

export function fetchIssues() {
  return function(dispatch) {
    dispatch(requestIssues());
    
    return fetch('https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues')
      .then(
        response => response.json().then(data => data),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        dispatch(receiveIssues(json))
      )
  }
}