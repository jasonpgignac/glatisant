import PropTypes from 'prop-types';

const user = PropTypes.shape({
  login: PropTypes.string,
  avatar_url: PropTypes.string,
});

const issue = PropTypes.shape({
  id: PropTypes.number,
  user,
  title: PropTypes.string,
  creator: PropTypes.string,
  state: PropTypes.string,
  body: PropTypes.string,
});

export default { issue, user };
