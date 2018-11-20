import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setContractsRequest, setContractsDeleteEntry } from '../modules/contracts/actions';
import { getContractsData } from '../modules/reducer';

import ContractsTableView from '../components/ContractsTableView';

export class ContractsTable extends Component {
  componentDidMount() {
    this.props.setContractsRequest();
  }

  render() {
    return (
      <ContractsTableView
        contracts={this.props.contractsData}
        deleteHandler={id => this.props.setContractsDeleteEntry(id)}
      />
    );
  }
}

export default connect(
  state => ({
    contractsData: getContractsData(state)
  }),
  { setContractsRequest, setContractsDeleteEntry }
)(ContractsTable);