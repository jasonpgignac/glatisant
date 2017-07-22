import { combineReducers } from 'redux';
import { REQUEST_ISSUES, RECEIVE_ISSUES } from './actions';

function issues(state = {
  isFetching: false,
  items: [],
  pageNumber: 1,
  lastPageNumber: 1,
}, action) {
  switch (action.type) {
    case REQUEST_ISSUES:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_ISSUES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.issues,
        pageNumber: action.pageNumber,
        lastPageNumber: action.lastPageNumber,
      });

    default:
      return state;
  }
}

const GlatisantApp = combineReducers({ issues });

export default GlatisantApp;

