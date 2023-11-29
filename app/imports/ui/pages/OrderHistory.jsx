import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, ButtonGroup, Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Containers } from '../../api/container/Containers';
import OrderItem from '../components/OrderItem';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all Container documents. Use <OrderItem> to render each row. */
const OrderHistory = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, orders } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Containers documents.
    const subscription = Meteor.subscribe(Containers.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Containers documents
    const orderItems = Containers.collection.find({}).fetch();
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
            <h2>Order History</h2>
            <Row className="justify-content-center">
              <ButtonGroup className="py-3">
                <Button variant="light" className="border border-secondary border-1">Show All Orders</Button>
                <Button variant="light" className="border border-secondary border-1">Show Active Orders</Button>
              </ButtonGroup>
            </Row>
          </Col>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>Container ID</th>
                <th>Checkout Date</th>
                <th>Status</th>
                <th>Return</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => <OrderItem key={order._id} order={order} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default OrderHistory;