import { connect } from 'react-redux';
import IssuesTable from './IssuesTable';
import { readIssues } from '../../model/actions';

const mapStateToProps = state => ({ data: state.issues });

const mapDispatchToProps = dispatch => ({
  readIssues: () => { dispatch(readIssues()); },
});

const VisibleIssuesTable = connect(mapStateToProps, mapDispatchToProps)(IssuesTable);

export default VisibleIssuesTable;
