// Action Creators and Constants (Redux)

//import fetch from 'isomorphic-fetch'
import config from '../../../config.js'

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

export function receiveIssues(issues, pageNumber, lastPageNumber) {
  return { type: RECEIVE_ISSUES, issues, pageNumber };
}

export function fetchIssues(pageNumber=1) {
  return function(dispatch) {
    dispatch(requestIssues());
    return fetch(
      `https://api.github.com/repos/${config.repository}/issues?` +
      `per_page=${config.pagination.issues.itemsPerPage}&page=${pageNumber}`)
      .then(
        response => {
          const lastPageNumber = extractLastPageNumber(response);
          return response.json()
                         .then(data => 
                           dispatch(receiveIssues(data, pageNumber, lastPageNumber)));
        },
        error => console.log('An error occured.', error)
      );
  }
}

// Internal Functions

function extractLastPageNumber(response) {
  const lastLink = response.headers.get('link')
                                   .split(', ')
                                   .find(link => /rel="last"$/.exec(link));
  return /&page=(\d+)/.exec(lastLink)[1];
}