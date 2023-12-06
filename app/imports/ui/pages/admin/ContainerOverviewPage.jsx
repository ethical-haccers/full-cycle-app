import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row, Table } from 'react-bootstrap';
import StuffsAccounts from '../../components/StuffsAccounts';
import LoadingSpinner from '../../components/LoadingSpinner';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Containers } from '../../api/container/Containers';

/* Renders a table containing all of the Stuff documents. Use <StuffItemAdmin> to render each row. */
const ContainerOverview = () => {
  // useraccounts : object from Meteor.users.find({})
  const { ready, containerscollection } = useTracker(() => {
    const subscription = Meteor.subscribe('ContainersCollection');
    const rdy = subscription.ready();
    // userAccount saved into useraccounts. userAccount not used outside useTracker
    const containerFind = Meteor.users.find({}).fetch();
    return {
      useraccounts: userAccount,
      ready: rdy,
    };
  }, []);
  //   console.log(accounts);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center"><h2>Account Overview</h2></Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>username</th>
                <th>id</th>
              </tr>
            </thead>
            <tbody>
              {useraccounts.map((account) => <StuffsAccounts key={account._id} user={account} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ContainerOverview;
