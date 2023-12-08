import React from 'react';
import { Link } from 'react-router-dom';
// Import necessary styles

const AdminLanding = () => (
  <div className="admin-landing">
    <h1>Admin Dashboard</h1>

    <div className="dashboard-buttons">
      <Link to="/ordersoverview">
        <button type="button" className="dashboard-button">Orders Overview</button>
      </Link>

      <Link to="/accountoverview">
        <button type="button" className="dashboard-button">Accounts Overview</button>
      </Link>
    </div>

    {/* Additional admin tools, links, or information as required */}
  </div>
);

export default AdminLanding;
