import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Chart } from 'react-google-charts';
import { Containers } from '../../api/container/Containers';

const ContainerBarGraph = () => {
  const containerData = useTracker(() => Containers.find().fetch(), []);

  const processData = (data) => {
    const groupedData = {};
    for (const container of data) {
      const month = container.checkoutDate.getMonth();
      if (!groupedData[month]) {
        groupedData[month] = { month, count: 0 };
      }
      groupedData[month].count++;
    }
    return [['Month', 'Containers Rented'],
      ...Object.values(groupedData).sort((a, b) => a.month - b.month).map(item => [new Date(0, item.month).toLocaleString('default', { month: 'long' }), item.count])];
  };

  const chartData = containerData.length ? processData(containerData) : [];

  const options = {
    title: 'Containers Rented Over Time',
    hAxis: { title: 'Month' },
    vAxis: { title: 'Containers Rented' },
  };

  return (
    <Chart
      chartType="BarChart"
      data={chartData}
      options={options}
      width="100%"
      height="400px"
    />
  );
};

export default ContainerBarGraph;
