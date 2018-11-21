import React, { Component } from 'react';

import ContractsTableItemDetailsView from '../components/ContractsTableItemDetailsView';

class ContractsTableItemDetails extends Component {
  state = {
    modal: false,
    backdrop: true
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <ContractsTableItemDetailsView
        contract={this.props.contract}
        toggle={this.toggle}
        modalIsOpen={this.state.modal}
        modalBackdrop={this.state.backdrop}
        buttonHandler={this.toggle}
      />
    );
  }
}

export default ContractsTableItemDetails;