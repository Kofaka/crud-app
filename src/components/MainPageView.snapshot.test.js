import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme'

import MainPageView from './MainPageView';

const setup = (propsOverrides) => {
  const props = Object.assign({
    contracts: [
      {
        "user": {
          "name": "Cory",
          "surname": "Tory"
        },
        "amountInUsd": "34900",
        "currency": "ETH",
        "date": "2018-11-13"
      },
      {
        "user": {
          "name": "Yugi",
          "surname": "Wertyujk"
        },
        "amountInUsd": "128900",
        "currency": "ETH",
        "date": "2018-01-17"
      },
    ],
    chartData: {
      labels: 'Chart',
      datasets: [
        {
          label: [ 'January', 'February', 'March' ],
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(97, 218, 251,0.4)',
          borderColor: 'rgba(97, 218, 251,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(97, 218, 251,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(97, 218, 251,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [ 23, 10, 567 ],
        }
      ]
    },
  }, propsOverrides);

  return {
    props
  };
};

describe('Component: MainPageView', () => {
  it('renders without crashing', () => {
    const { props } = setup();
    const view = shallow(<MainPageView {...props} />);
    expect(view).toMatchSnapshot();
  });
});

