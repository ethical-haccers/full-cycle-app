import React from 'react';
import PropTypes  from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
const StuffsAccounts = ({ user }) => (
  <tr>
    <td>{user.username}</td>
    <td>{user._id}</td>
  </tr>
);

// Require a document to be passed to this component.
StuffsAccounts.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default StuffsAccounts;
