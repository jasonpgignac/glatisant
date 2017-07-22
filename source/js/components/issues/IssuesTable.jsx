import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

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
    this.state = { selectedIssue: null, showSelectedIssue: false, pageNumber: 1 };
    this.dismissModal = this.dismissModal.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentWillMount() {
    this.props.readIssues(this.state.pageNumber);
  }

  dismissModal() {
    this.setState(Object.assign({}, this.state, { showSelectedIssue: false }));
  }

  openIssue(id) {
    this.setState({
      selectedIssue: this.props.data.find(issue => issue.id === id),
      showSelectedIssue: true,
    });
  }

  handlePageClick(data) {
    console.log('Pagination Data', data);
    this.setState({ pageNumber: data.selected });
    this.props.readIssues(this.state.pageNumber);
  }

  render() {
    return (
      <div className="issues">
        <IssueDetail
          issue={this.state.selectedIssue}
          show={this.state.showSelectedIssue}
          didDismiss={this.dismissModal}
        />
        {
          this.props.data.map(issue => (
            <section className="panel panel-default issue-list-entry" key={`Issue-${issue.id}`}>
              <div
                className="panel-heading"
                role="link"
                onClick={() => this.openIssue(issue.id)}
                tabIndex="-1"
              >
                <div className="row">
                  <div className="issue-list-entry-heading col-md-10">
                    <span className="issue-list-entry-title">{issue.title} </span>
                    <small>({issue.id})</small>
                  </div>
                  <div className="issue-list-entry-state col-md-2">{issue.state}</div>
                </div>
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
        <ReactPaginate
          pageCount={this.props.pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          subContainerClassName="pages pagination"
          breakClassName="disabled"
        />
      </div>
    );
  }
}

IssuesTable.propTypes = {
  data: PropTypes.arrayOf(GithubPropTypes.issue),
  readIssues: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

IssuesTable.defaultProps = { data: [] };

export default IssuesTable;
