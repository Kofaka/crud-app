import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setContractsRequest } from '../modules/contracts/actions';
import { setCoinApiRequest } from '../modules/coinApi/actions';
import { getContractsData, getCoinApiData } from '../modules/reducer';

import MainPageView from '../components/MainPageView';

export class MainPage extends Component {
  componentDidMount() {
    this.props.setContractsRequest();
    this.props.setCoinApiRequest();
  }

  getChartData = (data = []) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December' ];

    const sortedData = data.sort((a, b) => (
      (a.time_coinapi < b.time_coinapi) ? -1 : (a.time_coinapi > b.time_coinapi) ? 1 : 0
    ));

    const chartLabels = sortedData.map(data => monthNames[ new Date(data.time_coinapi).getMonth() ]);
    const chartDatasetsData = sortedData.map(data => data.bid_price);
    const chartDatasetsLabel = (data.asset_id_base) ? `The rates for ${data.asset_id_base} currency` : `The rates chart`;

    const chartData = {
      labels: chartLabels,
      datasets: [
        {
          label: chartDatasetsLabel,
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
          data: chartDatasetsData,
        }
      ]
    };

    return chartData;
  };

  render() {
    const { contractsData } = this.props;
    const mockedCoinApiData = [
      {
        "symbol_id": "BITSTAMP_SPOT_BTC_USD",
        "time_exchange": "2013-09-28T22:40:50.0000000Z",
        "time_coinapi": "2017-03-18T22:42:21.3763342Z",
        "ask_price": 770.000000000,
        "ask_size": 3252,
        "bid_price": 345,
        "bid_size": 124
      },
      {
        "symbol_id": "BITSTAMP_SPOT_BTC_USD",
        "time_exchange": "2013-09-28T22:40:50.0000000",
        "time_coinapi": "2017-04-18T22:42:21.3763342",
        "ask_price": 770.000000000,
        "ask_size": 3252,
        "bid_price": 123,
        "bid_size": 124
      },
      {
        "symbol_id": "BITSTAMP_SPOT_BTC_USD",
        "time_exchange": "2013-09-28T22:40:50.0000000Z",
        "time_coinapi": "2017-04-18T22:42:21.3763342Z",
        "ask_price": 770.000000000,
        "ask_size": 3252,
        "bid_price": 987,
        "bid_size": 124
      },
      {
        "symbol_id": "BITSTAMP_SPOT_BTC_USD",
        "time_exchange": "2013-09-28T22:40:50.0000000",
        "time_coinapi": "2017-06-18T22:42:21.3763342",
        "ask_price": 770.000000000,
        "ask_size": 3252,
        "bid_price": 760,
        "bid_size": 124
      },
      {
        "symbol_id": "BITSTAMP_SPOT_BTC_USD",
        "time_exchange": "2013-09-28T22:40:50.0000000Z",
        "time_coinapi": "2017-05-18T22:42:21.3763342Z",
        "ask_price": 770.000000000,
        "ask_size": 3252,
        "bid_price": 349,
        "bid_size": 124
      },
      {
        "symbol_id": "BITSTAMP_SPOT_BTC_USD",
        "time_exchange": "2013-09-28T22:40:50.0000000",
        "time_coinapi": "2017-07-18T22:42:21.3763342",
        "ask_price": 770.000000000,
        "ask_size": 3252,
        "bid_price": 333,
        "bid_size": 124
      },
      {
        "symbol_id": "BITSTAMP_SPOT_BTC_USD",
        "time_exchange": "2013-09-28T22:40:50.0000000Z",
        "time_coinapi": "2017-03-18T22:42:21.3763342Z",
        "ask_price": 770.000000000,
        "ask_size": 3252,
        "bid_price": 444,
        "bid_size": 124
      },
      {
        "symbol_id": "BITSTAMP_SPOT_BTC_USD",
        "time_exchange": "2013-09-28T22:40:50.0000000",
        "time_coinapi": "2017-03-18T22:42:21.3763342",
        "ask_price": 770.000000000,
        "ask_size": 3252,
        "bid_price": 567,
        "bid_size": 124
      }
    ];
    return <MainPageView chartData={this.getChartData(mockedCoinApiData)} contracts={contractsData}/>;
  }
}

export default connect(
  state => ({
    contractsData: getContractsData(state),
    coinApiData: getCoinApiData(state),
  }),
  { setContractsRequest, setCoinApiRequest }
)(MainPage);