import React from 'react';
import ContainerBarGraph from '../components/ContainersChart';

const ContainersPage = () => (
  <div style={{ padding: '20px' }}>
    <h1>Container Rental Statistics</h1>
    <p>
      This page provides a graphical overview of the containers rented over time.
      The bar graph below represents the number of containers rented each month,
      giving insights into rental trends and demands.
    </p>

    <ContainerBarGraph />

    <p>
      Note: The data is updated regularly to reflect the most current rental
      statistics. For more detailed information, please contact our support team.
    </p>
  </div>
);

export default ContainersPage;
