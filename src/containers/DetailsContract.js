import React, { Component } from 'react';

import DetailsContractView from '../components/DetailsContractView';

class DetailsContract extends Component {
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
      <DetailsContractView
        contract={this.props.contract}
        toggle={this.toggle}
        modalIsOpen={this.state.modal}
        modalBackdrop={this.state.backdrop}
        buttonHandler={this.toggle}
      />
    );
  }
}

export default DetailsContract;