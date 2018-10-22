// @flow

import React from 'react';
import {
  PieChart, Pie, Sector, Cell, Tooltip,
} from 'recharts';

import Psuedo from './Psuedo';

const COLORS = [
  '#3d9cdb',
  '#262626',
  '#0c2b41',
  '#93c8eb',
  '#040e16',
  '#595959',
  '#d9d9d9',
  '#14486c',
  '#000',
  '#fff',
];

type Props = { topUsers: Array<{ name: string, value: number }>, loading: boolean };

const EventsChart = ({ topUsers, loading }: Props) => (loading ? (
  <Psuedo />
) : (
  <section className="received-events">
    <h3>Received events</h3>
    {topUsers.length > 0 && (
    <div className="received-events__chart-container">
      <PieChart className="received-events__chart" width={800} height={400}>
        <Pie
          isAnimationActive={false}
          data={topUsers}
          cx={600}
          cy={200}
          outerRadius={160}
          innerRadius={100}
          fill="#8884d8"
        >
          {topUsers.map((entry, index) => (
            <Cell fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
    )}

    {!loading
        && topUsers.length === 0 && (
          <p className="received-events__hint">
            User has not recieved event during the last 90 days.
          </p>
    )}
  </section>
));

export default EventsChart;
