import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Linegraph() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 14, 16, 18, 20, 22] }]}
     
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5, 3.7, 1, 1, 4, 2.6, 3],
        },
      ]}
      width={500}
      height={300}
    />
  );
}