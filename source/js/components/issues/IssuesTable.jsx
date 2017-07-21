import React from 'react';
import PropTypes from 'prop-types';
import IssueDetail from './IssueDetail';
import GithubPropTypes from '../../githubPropTypes';

require('../../../css/components/IssueTable.css');

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
            <section className="panel panel-default issue-list-entry" key={`Issue-${issue.id}`}>
              <div
                className="panel-heading"
                role="link"
                onClick={() => this.openIssue(issue.id)}
                tabIndex="-1"
              >
                <span className="issue-list-entry-title">{issue.title} </span>
                <small>({issue.id})</small>
                {/* <div>{issue.status}</div> */}
              </div>
              <div className="issue-summary panel-body">
                <p>
                  <img className="issueCreatorAvatar" alt={`avatar for ${issue.user.login}`} src={issue.user.avatar_url} />
                  <span><strong>{issue.user.login}</strong>: {truncateField(issue.body, 140)}</span>
                </p>
              </div>
            </section>
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
