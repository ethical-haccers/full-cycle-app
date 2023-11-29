import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Recycle } from 'react-bootstrap-icons';

/** Renders a single row in the order history. See pages/OrderHistory.jsx. */
const AdminOrderItem = ({ order }) => (
  <tr>
    <td>{order.containerId}</td>
    <td>{order.owner}</td>
    <td><p>{order.checkoutDate.toLocaleDateString('en-US')}</p></td>
    <td>{order.status}</td>
  </tr>
);

// Require a document to be passed to this component.
AdminOrderItem.propTypes = {
  order: PropTypes.shape({
    containerId: PropTypes.string,
    owner: PropTypes.string,
    checkoutDate: PropTypes.instanceOf(Date),
    status: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default AdminOrderItem;
