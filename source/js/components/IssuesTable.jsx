import React from 'react';
import PropTypes from 'prop-types';

class IssuesTable extends React.PureComponent {

  render() {
    return (<table>
      <thead>
        <tr>
          {
            this.props.headers.map(object => <th key={`${object}-header`}>{object}</th>)
          }
        </tr>
      </thead>
    </table>);
  }

}

IssuesTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IssuesTable;
