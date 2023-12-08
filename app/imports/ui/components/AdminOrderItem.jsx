import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the order history. See pages/OrderHistory.jsx. */
const AdminOrderItem = ({ order }) => {
  let returnDate;
  if (order.returnDate) {
    returnDate = order.returnDate.toLocaleDateString('en-US');
  } else {
    returnDate = '-';
  }
  return (
    <tr>
      <td>{order.containerId}</td>
      <td>{order.owner}</td>
      <td><p>{order.checkoutDate.toLocaleDateString('en-US')}</p></td>
      <td><p>{returnDate}</p></td>
      <td>{order.status}</td>
    </tr>
  );
};
// Require a document to be passed to this component.
AdminOrderItem.propTypes = {
  order: PropTypes.shape({
    containerId: PropTypes.string,
    owner: PropTypes.string,
    checkoutDate: PropTypes.instanceOf(Date),
    returnDate: PropTypes.instanceOf(Date),
    status: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default AdminOrderItem;
