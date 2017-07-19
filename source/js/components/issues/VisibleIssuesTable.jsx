import { connect } from 'react-redux';
import IssuesTable from './IssuesTable';
import { fetchIssues } from '../../model/actions';

const mapStateToProps = state => ({ data: state.issues.items });

const mapDispatchToProps = dispatch => ({
  readIssues: () => { dispatch(fetchIssues()); },
});

const VisibleIssuesTable = connect(mapStateToProps, mapDispatchToProps)(IssuesTable);

export default VisibleIssuesTable;
