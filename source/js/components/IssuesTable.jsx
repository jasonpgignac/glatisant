import React from 'react';
import PropTypes from 'prop-types';

function truncateField(field, length) {
  return field.length <= length ? field
                                : `${field.substr(0, length).trim()}...`;
}

class IssuesTable extends React.PureComponent {

  render() {
    return (
      <div className="issues">
        {
          this.props.data.map(issue => (
            <article key={`Issue-${issue.id}`}>
              <div className="basic-issue-data">
                <div>{issue.id}</div>
                <div>{issue.status}</div>
                <div>{issue.title}</div>
                <div>{issue.creator}</div>
              </div>
              <div className="issuesummary">{truncateField(issue.summary, 140)}</div>
            </article>
          ))
        }
      </div>
    );
  }
}

IssuesTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    creator: PropTypes.string,
    status: PropTypes.string,
    summary: PropTypes.string,
  })).isRequired,
};

export default IssuesTable;
