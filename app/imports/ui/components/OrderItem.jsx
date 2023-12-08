import React from 'react';
import PropTypes from 'prop-types';
import { Receipt } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

/** Renders a single row in the order history. See pages/OrderHistory.jsx. */
const OrderItem = ({ order, returnFunction }) => {
  let returnButton;
  let returnDate;
  const handleReturnClick = (orderId) => {
    if (window.confirm('Return this container?')) {
      returnFunction(orderId);
    }
  };
  if (order.status === 'with-vendor') {
    returnButton = 'returned';
  } else {
    returnButton = <Button className="btn btn-success" onClick={handleReturnClick(order._id)}><i aria-hidden="true"> <Receipt /> </i></Button>;
  }
  if (order.returnDate) {
    returnDate = order.returnDate.toLocaleDateString('en-US');
  } else {
    returnDate = '-';
  }
  return (
    <tr>
      <td>{order.containerId}</td>
      <td><p>{order.checkoutDate.toLocaleDateString('en-US')}</p></td>
      <td><p>{returnDate}</p></td>
      <td>{order.status}</td>
      <td>
        {returnButton}
      </td>
    </tr>
  );
};

// Require a document to be passed to this component.
OrderItem.propTypes = {
  order: PropTypes.shape({
    containerId: PropTypes.string,
    checkoutDate: PropTypes.instanceOf(Date),
    returnDate: PropTypes.instanceOf(Date),
    status: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  returnFunction: PropTypes.func.isRequired, // The function to handle container return
};

export default OrderItem;
