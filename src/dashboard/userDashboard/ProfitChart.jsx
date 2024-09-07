import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', profit: 400 },
  { name: 'Feb', profit: 300 },
  { name: 'Mar', profit: 200 },
  { name: 'Apr', profit: 278 },
  { name: 'May', profit: 189 },
  { name: 'Jun', profit: 239 },
  { name: 'Jul', profit: 349 },
  { name: 'Aug', profit: 400 },
];

const ProfitChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="profit" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProfitChart;
