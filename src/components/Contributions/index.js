// @flow

import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import Psuedo from './Psuedo';

type Props = {
  contribuations: any,
  loading: boolean,
  error: boolean,
};

const Contribuations = ({ contribuations, loading, error }: Props) => (loading ? (
  <Psuedo />
) : (
  <section className="contribuations">
    <h3 className="contribuations__title">Contribuations</h3>

    <CalendarHeatmap
      startDate={new Date('2018-01-01')}
      endDate={new Date('2018-12-31')}
      values={contribuations}
    />
  </section>
));

export default Contribuations;
