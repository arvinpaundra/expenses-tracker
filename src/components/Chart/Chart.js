import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const totalDataPoints = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...totalDataPoints);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} label={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} />
      ))}
    </div>
  );
};

export default Chart;
