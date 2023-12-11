import React from 'react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
const StuffsAdminAccounts = ({ user }) => (
  <tr>
    <td>{user.username}</td>
    <td>{user.password}</td>
    <td>{user.organization}</td>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
  </tr>
);

// Require a document to be passed to this component.
StuffsAdminAccounts.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  password: password,
  organization: organization,
  firstName: firstName,
  lastName: lastName
};

export default StuffsAccounts;
