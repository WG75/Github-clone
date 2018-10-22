// @flow

import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import Psuedo from './Psuedo';
import 'react-calendar-heatmap/dist/styles.css';
import './CommitsChart.css';

type Props = {
  contribuations: any,
  loading: boolean,
  error: boolean,
};

const CommitsChart = ({ contributions, loading, error }: Props) => {
  const getTooltipDataAttrs = value => ({
    'data-tip': `${value.count > 0 ? value.count : 'No'} commits on ${value.date}`,
  });

  return loading ? (
    <Psuedo />
  ) : (
    <section className="contributions">
      <h3 className="contributions__title">contributions</h3>

      <CalendarHeatmap
        showOutOfRangeDays
        startDate={new Date('2018-01-01')}
        endDate={new Date('2018-12-31')}
        values={contributions}
        tooltipDataAttrs={getTooltipDataAttrs}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-gitlab-${value.count}`;
        }}
      />

      <ReactTooltip />
    </section>
  );
};

export default CommitsChart;
