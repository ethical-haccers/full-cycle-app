import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, ButtonGroup, Col, Container, Dropdown, DropdownButton, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Containers } from '../../api/container/Containers';
import LoadingSpinner from '../components/LoadingSpinner';
import AdminOrderItem from '../components/AdminOrderItem';

/* Renders a table containing all Container documents. Use <OrderItem> to render each row. */
const AdminOrderHistory = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const [orderFilter, setFilter] = useState({});
  const [orderSort, setSort] = useState({ sort: {} });
  const filterReturn = { returnDate: { $ne: null } };
  const filterActive = { returnDate: null };
  const filterAll = {};
  const sortStatus = { sort: { status: 'in-use' } };
  const sortAccount = { sort: { owner: '0' } };
  const sortCheckout = { sort: { checkoutDate: 0 } };
  const handleChanges = e => setFilter(e.target.value);

  const { ready, orders } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Containers documents.
    const subscription = Meteor.subscribe(Containers.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Containers documents
    const orderItems = Containers.collection.find(orderFilter, orderSort).fetch();
    // replace orderFilter or orderSort with any of the const above and the filter works but I can't link them to buttons
    return {
      orders: orderItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Admin Order History</h2>
            <Row className="justify-content-center">
              <DropdownButton id="admin-filter-dropdown" title="Filter Results" variant="light" className="py-3">
                <Dropdown.Item onClick={() => setSort(sortStatus)} onChange={handleChanges}>Filter By Status</Dropdown.Item>
                <Dropdown.Item onClick={() => setSort(sortAccount)}>Filter By Account (Alphabetical)</Dropdown.Item>
                <Dropdown.Item onClick={() => setSort(sortCheckout)}>Filter By Checkout Date</Dropdown.Item>
              </DropdownButton>
            </Row>
            <Row className="justify-content-center">
              <ButtonGroup>
                <Button name="buttonReturn" onClick={() => setFilter(filterReturn)} onChange={handleChanges}>Returned Orders</Button>
                <Button onClick={() => setFilter(filterAll)}>Show All Orders</Button>
                <Button onClick={() => setFilter(filterActive)}>Active Orders</Button>
              </ButtonGroup>
            </Row>
          </Col>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>Container ID</th>
                <th>Owner</th>
                <th>Checkout Date</th>
                <th>Return Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => <AdminOrderItem key={order._id} order={order} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default AdminOrderHistory;
