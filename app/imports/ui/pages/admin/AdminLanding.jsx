import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
// Import necessary styles

const AdminLanding = () => (
  <div className="admin-landing">
    <h1 className="text-center">Admin Dashboard</h1>

    <div>
      <Row>
        <Col className="justify-content-center">
          <div className="gray-background m-4 rounded-top-4">
            <Row>
              <h2 className="text-center">Orders Overview</h2>
            </Row>
            <Row>
              <Col>
                <ul className="dashboard-card m-4">
                  <li>View customer order history.</li>
                  <li>Track returning and outgoing orders.</li>
                  <li>Organize customer records</li>
                </ul>
              </Col>
              <Col>
                <div className="dashboard-buttons">
                  <Link to="/adminhistory">
                    <button type="button" className="dashboard-button">View Customer Records</button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="justify-content-center">
          <div className="gray-background m-4 rounded-top-4">
            <Row>
              <h2 className="text-center">Accounts Overview</h2>
            </Row>
            <Row>
              <Col>
                <ul className="dashboard-card m-4">
                  <li>View user-account database.</li>
                  <li>Filter user-accounts for easy access.</li>
                  <li>Grant user-account permissions.</li>
                </ul>
              </Col>
              <Col>
                <div className="dashboard-buttons">
                  <Link to="/accountspage">
                    <button type="button" className="dashboard-button">View Customer Accounts</button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>

    {/* Additional admin tools, links, or information as required */}
  </div>
);

export default AdminLanding;
