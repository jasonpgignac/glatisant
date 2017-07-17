import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import IssuesTable from './components/IssuesTable';

require('../css/app.css');

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

ReactDOM.render(
  <h1>
    <Logo />Welcome to Glatisant
    <IssuesTable data={issuesData} />
  </h1>,
  document.getElementById('app'));
