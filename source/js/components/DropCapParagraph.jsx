import React from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';
import sanitizeHtml from 'sanitize-html-react';

import DropCapMappings from '../dropCapMappings';

require('../../css/components/DropCapParagraph.css');

function nodeHasValidTextValue(node) {
  return !!node.nodeValue;
}
class IssueDetail extends React.PureComponent {
  render() {
    const converter = new showdown.Converter();
    const parsedBody = (new DOMParser()).parseFromString(converter.makeHtml(this.props.body), 'text/html');
    const firstTextNode = parsedBody.createNodeIterator(
      parsedBody.body,
      NodeFilter.showText,
      { acceptNode: nodeHasValidTextValue }).nextNode();
    const firstChar = firstTextNode.nodeValue.charAt(0);
    firstTextNode.nodeValue = firstTextNode.nodeValue.substring(1);
    const dropCaplessBody = parsedBody.body.innerHTML;
    return (
      <div>
        <img className="drop-cap" src={DropCapMappings[firstChar]} alt={firstChar} />
        <div
          className="remaining-body"
          // we are sanitizing this html, but it should be tested for security before
          // a production release.
          dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
            __html: sanitizeHtml(dropCaplessBody),
          }}
        />
      </div>);
  }
}

IssueDetail.propTypes = { body: PropTypes.string.isRequired };

export default IssueDetail;
