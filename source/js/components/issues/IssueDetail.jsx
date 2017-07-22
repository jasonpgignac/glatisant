import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

import GithubPropTypes from '../../githubPropTypes';
import DropCapParagraph from '../DropCapParagraph';

require('../../../css/components/IssueDetail.css');

class IssueDetail extends React.PureComponent {
  render() {
    let el = null;
    if (this.props.show && this.props.issue) {
      el = (
        <ModalContainer onClose={this.props.didDismiss}>
          <ModalDialog onClose={this.props.didDismiss}>
            <div className="issue-detail-frame">
              <div className="issue-detail">
                <header>
                  <section className="issue-detail-labels">
                    <div className="issue-detail-user label label-default issue-detail-label">
                      <span className="label">Creator</span>
                      <img
                        className="issue-detail-user-avatar"
                        src={this.props.issue.user.avatar_url}
                        alt={`Avatar for user ${this.props.issue.user.login}`}
                      />
                      { this.props.issue.user.login }
                    </div>
                    <div className="label label-default issue-detail-label">{this.props.issue.state}</div>
                  </section>
                  <h1>{this.props.issue.id}:{this.props.issue.title}</h1>
                </header>
                <article className="issue-detail-body">
                  {/* <section className="issue-detail-status">
                    <div className="label">Status</div>
                    <div>{this.props.issue.status}</div>
                  </section> */}
                  <DropCapParagraph body={this.props.issue.body} />
                </article>
              </div>
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
  didDismiss: PropTypes.func.isRequired,
};

IssueDetail.defaultProps = { issue: null, show: false };

export default IssueDetail;
