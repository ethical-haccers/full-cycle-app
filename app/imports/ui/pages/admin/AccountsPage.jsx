import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';

const AccountsPage = () => {
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Accounts</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                <th>organization</th>
              </tr>
            </thead>
            <tbody>
              {/* This is where the account info will go */}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountsPage;