import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row, Table } from 'react-bootstrap';
import StuffsAccounts from '../../components/StuffsAccounts';
import LoadingSpinner from '../../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItemAdmin> to render each row. */
const AccountsPage = () => {
  // useraccounts : object from Meteor.users.find({})  
  const { ready, useraccounts } = useTracker(() => {
    const subscription = Meteor.subscribe('userAccounts');
    const rdy = subscription.ready();
    // userAccount saved into useraccounts. userAccount not used outside of useTracker
    const userAccount = Meteor.users.find({}).fetch();
    return {
     useraccounts : userAccount,
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
              {useraccounts.map((useraccounts) => <StuffsAccounts key={useraccounts._id} user={useraccounts} />)}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    ) : <LoadingSpinner />);
};

export default AccountsPage;

