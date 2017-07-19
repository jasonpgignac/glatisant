import { combineReducers } from 'redux'
import { READ_ISSUES } from './actions'

const issuesData = [
  {
    id: 123456,
    title: 'Bells have been Broken',
    creator: 'Frankie',
    status: 'open',
    summary: 'How nobly did the bells ring that day! Their copper clappers drumming, they played wild and tuneless, as if driven by the wind - though the wind, here, was the hunchback, his arms swinging up and down wildly. Ring! Ring! Ring! And the rope twanged and whirled, and snapped and broke, and down, down the high tower he fell. Down, down to the bottom.',
  },
  {
    id: 34343,
    title: 'I am sad',
    creator: 'Jean',
    status: 'open',
    summary: 'I was bad, and the bishop will be angry',
  },
];

function issues(state = [], action) {
  switch (action.type) {
    case REQUEST_ISSUES:
      return issuesData;
     default:
      return state;
  }
}

const GlatisantApp = combineReducers({ issues });

export default GlatisantApp;

