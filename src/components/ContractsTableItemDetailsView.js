import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

const ContractsTableItemDetailsView = ({
  contract,
  buttonLabel,
  toggle,
  modalIsOpen,
  modalBackdrop,
  buttonHandler,
}) => {
  if (contract && Object.keys(contract).length) {
    return (
      <>
      <Button color="info" onClick={toggle}>{buttonLabel}</Button>

      <Modal
        isOpen={modalIsOpen}
        toggle={toggle}
        backdrop={modalBackdrop}
      >
        <ModalHeader toggle={toggle}>
          Details about contract <span className="text-info">#{contract.id}</span>
        </ModalHeader>

        <ModalBody>
          <Row>
            <Col md={5} className="text-uppercase font-weight-bold text-right">User name:</Col>
            <Col md={7} className="text-left">{contract.user.name} {contract.user.surname}</Col>
          </Row>
          <Row>
            <Col md={5} className="text-uppercase font-weight-bold text-right">Amount in USD:</Col>
            <Col md={7} className="text-left">{contract.amountInUsd}</Col>
          </Row>
          <Row>
            <Col md={5} className="text-uppercase font-weight-bold text-right">Currency:</Col>
            <Col md={7} className="text-left">{contract.currency}</Col>
          </Row>
          <Row>
            <Col md={5} className="text-uppercase font-weight-bold text-right">Date:</Col>
            <Col md={7} className="text-left">{contract.date}</Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Button color="info" onClick={buttonHandler}>Got it</Button>
        </ModalFooter>
      </Modal>
      </>
    );
  }

  return null;
};

export default ContractsTableItemDetailsView;