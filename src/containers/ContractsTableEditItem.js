import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setContractsUpdateEntry } from '../modules/contracts/actions';

import ContractsTableEditItemView from '../components/ContractsTableEditItemView';

export class ContractsTableEditItem extends Component {
  state = {
    id: '',
    name: '',
    surname: '',
    amountInUsd: '',
    currency: '',
    date: '',
    modalIsOpen: false,
    modalBackdrop: true,
  };

  componentDidMount() {
    const { id, user: { name, surname }, amountInUsd, currency, date } = this.props.contract;
    this.setState({
      id,
      name,
      surname,
      amountInUsd,
      currency,
      date,
    });
  }

  toggleModalWindow = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  };

  inputChangeHandler = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  cancelEditContractHandler = e => {
    e.preventDefault();
    const { id, user: { name, surname }, amountInUsd, currency, date } = this.props.contract;

    this.setState({
      id,
      name,
      surname,
      amountInUsd,
      currency,
      date,
    });

    this.toggleModalWindow();
  };

  editContractHandler = e => {
    e.preventDefault();
    const { id, name, surname, amountInUsd, currency, date } = this.state;
    this.props.setContractsUpdateEntry({ id, name, surname, amountInUsd, currency, date });
    this.toggleModalWindow();
  };

  ifDisabledSubmit = () => (
    !this.state.name.length ||
    !this.state.surname.length ||
    !this.state.amountInUsd.length ||
    !this.state.currency.length ||
    !this.state.date.length
  );

  render() {
    const { id, name, surname, amountInUsd, currency, date } = this.state;
    const data = { id, name, surname, amountInUsd, currency, date };
    return (
      <ContractsTableEditItemView
        data={data}
        modalIsOpen={this.state.modalIsOpen}
        toggle={this.toggleModalWindow}
        modalBackdrop={this.state.modalBackdrop}
        cancelHandler={this.cancelEditContractHandler}
        submitHandler={this.editContractHandler}
        inputChangeHandler={this.inputChangeHandler}
        disableSubmit={this.ifDisabledSubmit()}
      />
    );
  }
}

export default connect(
  null,
  { setContractsUpdateEntry }
)(ContractsTableEditItem);
