// Action Creators and Constants (Redux)

/*
 * action types
 */

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
  return { type: RECEIVE_ISSUES, data: json.data };
}