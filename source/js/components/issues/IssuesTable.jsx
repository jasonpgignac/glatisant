import React from 'react';
import PropTypes from 'prop-types';
import IssueDetail from './IssueDetail';
import GithubPropTypes from '../../githubPropTypes';

function truncateField(field, length) {
  return field.length <= length ? field
                                : `${field.substr(0, length).trim()}...`;
}


class IssuesTable extends React.PureComponent {
  constructor() {
    super();
    this.state = { selectedIssue: null, showSelectedIssue: false };
  }

  componentWillMount() {
    this.props.readIssues();
  }

  openIssue(id) {
    this.setState({
      selectedIssue: this.props.data.find(issue => issue.id === id),
      showSelectedIssue: true,
    });
  }

  render() {
    return (
      <div className="issues">
        <IssueDetail issue={this.state.selectedIssue} show={this.state.showSelectedIssue} />
        {
          this.props.data.map(issue => (
            <article key={`Issue-${issue.id}`}>
              <div className="basic-issue-data">
                <div>
                  <a
                    role="link"
                    onClick={() => this.openIssue(issue.id)}
                    tabIndex="-1"
                  >
                    {issue.id}
                  </a>
                </div>
                <div>{issue.status}</div>
                <div>{issue.title}</div>
                <div>
                  <img className="issueCreatorGravatar" alt={`avatar for ${issue.user.login}`} src={issue.user.avatar_url} />
                  <span>{issue.user.login}</span>
                </div>
              </div>
              <div className="issuesummary">{truncateField(issue.body, 140)}</div>
            </article>
          ))
        }
      </div>
    );
  }
}

IssuesTable.propTypes = {
  data: PropTypes.arrayOf(GithubPropTypes.issue),
  readIssues: PropTypes.func.isRequired,
};

IssuesTable.defaultProps = { data: [] };

export default IssuesTable;
