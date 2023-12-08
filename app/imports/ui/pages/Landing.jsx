import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container fluid className="py-3">
    <Row className="text-center justify-content-center">
      <Container className="main-landing rounded my-6">
        <Button as={NavLink} to="/rent" variant="light" size="lg" className="w-75 my-1 my-md-4 my-lg-5 border border-2 rounded-5"><p className="landing">Rent A Container</p></Button>
        <Button as={NavLink} to="/return" variant="light" size="lg" className="w-75 my-1 my-md-4 my-lg-5 border border-2 rounded-5"><p className="landing">Return A Container</p></Button>
      </Container>
    </Row>
    <Row className="text-center justify-content-center py-2">
      <Container style={{ height: '300px' }} className="instructions-bg rounded my-6">
        <div className="landing-instruction rounded mx-2 my-4">
          <h1>Here Is How It Works:</h1>
        </div>
        <div className="landing-instruction rounded mx-2 my-4">
          <h2>1. Select your container type</h2>
          <h2>2. Choose certified washing facility</h2>
          <h2>3. Have a great event!</h2>
          <h2>4. Return the containers when you are done</h2>
        </div>
      </Container>
    </Row>
  </Container>
);

export default Landing;
