import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';


class IssueDetail extends React.PureComponent {
  render() {
    let el = null;
    if (this.props.show && this.props.issue) {
      el = (
        <ModalContainer onClose={this.handleClose}>
          <ModalDialog onClose={this.handleClose}>
            <div className="issue-detail">
              <header>
                <h1>{this.props.issue.id}: {this.props.issue.title}</h1>
              </header>
              <article>
                <section className="issue-detail-user">
                  <div className="label">Creator</div>
                  <div>{this.props.issue.creator}</div>
                </section>
                <section className="issue-detail-status">
                  <div className="label">Status</div>
                  <div>{this.props.issue.status}</div>
                </section>
                <section className="issue-detail-summary">
                  <div className="label">Summary</div>
                  <div>{this.props.issue.summary}</div>
                </section>
              </article>
            </div>
          </ModalDialog>
        </ModalContainer>
      );
    }
    return el;
  }
}

IssueDetail.propTypes = {
  show: PropTypes.bool,
  issue: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    creator: PropTypes.string,
    status: PropTypes.string,
    summary: PropTypes.string,
  }),
};

IssueDetail.defaultProps = { issue: null, show: false };

export default IssueDetail;
