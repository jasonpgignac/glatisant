import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

import GithubPropTypes from '../../githubPropTypes';

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
                  <div>
                    <img
                      className="issue-detail-user-avatar"
                      src={this.props.issue.user.avatar_url}
                      alt={`Avatar for user ${this.props.issue.user.login}`}
                    />
                    { this.props.issue.user.login }
                  </div>
                </section>
                <section className="issue-detail-status">
                  <div className="label">Status</div>
                  <div>{this.props.issue.status}</div>
                </section>
                <section className="issue-detail-summary">
                  <div className="label">Summary</div>
                  <div>{this.props.issue.body}</div>
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
  issue: GithubPropTypes.issue,
};

IssueDetail.defaultProps = { issue: null, show: false };

export default IssueDetail;
