import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ContractsTableItemDetailsView = ({
  contract,
  toggle,
  modalIsOpen,
  modalBackdrop,
  buttonHandler,
}) => {
  if (contract && Object.keys(contract).length) {
    return (
      <>
      <Button
        color="white"
        onClick={toggle}
        className="p-0 button_as-icon"
        tag="a"
        title="View contract details"
      >
        <FontAwesomeIcon icon={faEye} size="lg" />
      </Button>

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