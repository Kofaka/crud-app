import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setContractsNewEntry } from '../modules/contracts/actions';

import AddNewContractView from '../components/AddNewContractView';

export class AddNewContract extends Component {
  state = {
    userName: '',
    userSurname: '',
    amountInUsd: '',
    currency: '',
    date: '',
  };

  inputChangeHandler = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  addNewContractHandler = e => {
    e.preventDefault();
    const id = Math.round(Math.random() * 1000);
    this.props.setContractsNewEntry({ ...this.state, id });
  };

  render() {
    return (
      <AddNewContractView
        submitHandler={this.addNewContractHandler}
        inputChangeHandler={this.inputChangeHandler}
      />
    );
  }
}

export default connect(
  null,
  { setContractsNewEntry }
)(AddNewContract);