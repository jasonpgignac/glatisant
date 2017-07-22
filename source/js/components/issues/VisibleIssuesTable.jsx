import { connect } from 'react-redux';
import IssuesTable from './IssuesTable';
import { fetchIssues } from '../../model/actions';

const mapStateToProps = (state) => {
  const props = {
    data: state.issues.items,
    pageNumber: state.issues.pageNumber,
    pageCount: state.issues.lastPageNumber,
  };
  return props;
};

const mapDispatchToProps = dispatch => ({
  readIssues: (pageNumber) => { dispatch(fetchIssues(pageNumber + 1)); },
});

const VisibleIssuesTable = connect(mapStateToProps, mapDispatchToProps)(IssuesTable);

export default VisibleIssuesTable;
