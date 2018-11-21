import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setContractsRequest, setContractsDeleteEntry } from '../modules/contracts/actions';
import { getContractsData } from '../modules/reducer';

import ContractsTableView from '../components/ContractsTableView';

export class ContractsTable extends Component {
  componentDidMount() {
    this.props.setContractsRequest();
  }

  deleteHandler = (itemId) => {
    const confirmDelete = window.confirm(`Are You sure that you want to delete contract #${itemId}?`);
    confirmDelete && this.props.setContractsDeleteEntry(itemId);
  };

  render() {
    return (
      <ContractsTableView
        contracts={this.props.contractsData}
        deleteHandler={this.deleteHandler}
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