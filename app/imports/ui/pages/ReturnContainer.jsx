import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Containers } from '../../api/container/Containers';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { useTracker } from 'meteor/react-meteor-data';

const formSchema = new SimpleSchema({
  containerID: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

const ReturnContainer = () => {
  const { ready, orders } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Containers documents.
    const subscription = Meteor.subscribe(Containers.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Containers documents
    const orderItems = Containers.collection.find({}).fetch();
    return {
      orders: orderItems,
      ready: rdy,
    };
  }, []);

  const submit = (data, formRef) => {
    const { containerID } = data;
    console.log(ready);
    if (ready) {
      // const containerReturn = _.find(orders, function(order) { return order.containerId == containerId });
      // console.log(containerReturn);
      // containerReturn.returnDate = new Date();
      // containerReturn.status = 'cleaning';
      // console.log(containerReturn);
      Containers.collection.update(_.find(orders, function(order) { return order.containerId == containerID }), { $set: { returnDate: new Date() }});
      Containers.collection.update(_.find(orders, function(order) { return order.containerId == containerID }), { $set: { status: 'cleaning' }});
    }
  };
  console.log(orders);
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="containerID" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default ReturnContainer;
