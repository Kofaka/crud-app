import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setContractsDeleteEntry } from '../modules/contracts/actions';
import DeleteContractView from '../components/DeleteContractView';

export class DeleteContract extends Component {
  state = {
    modalIsOpen: false,
    modalBackdrop: true,
  };

  toggleModalWindow = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  };

  deleteHandler = () => {
    this.props.setContractsDeleteEntry(this.props.itemId);
    this.toggleModalWindow();
  };

  render() {
    return (
      <DeleteContractView
        itemId={this.props.itemId}
        toggle={this.toggleModalWindow}
        modalIsOpen={this.state.modalIsOpen}
        modalBackdrop={this.state.modalBackdrop}
        deleteHandler={this.deleteHandler}
      />
    );
  }
}

export default connect(
  null,
  { setContractsDeleteEntry }
)(DeleteContract);
