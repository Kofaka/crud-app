import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setContractsNewEntry } from '../modules/contracts/actions';

import AddNewContractView from '../components/AddNewContractView';

export class AddNewContract extends Component {
  state = {
    name: '',
    surname: '',
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

  ifDisabledSubmit = () => (
    !this.state.name.length ||
    !this.state.surname.length ||
    !this.state.amountInUsd.length ||
    !this.state.currency.length ||
    !this.state.date.length
  );

  render() {
    return (
      <AddNewContractView
        submitHandler={this.addNewContractHandler}
        inputChangeHandler={this.inputChangeHandler}
        disableSubmit={this.ifDisabledSubmit()}
      />
    );
  }
}

export default connect(
  null,
  { setContractsNewEntry }
)(AddNewContract);