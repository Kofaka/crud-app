import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default ({
  contract,
  toggle,
  modalIsOpen,
  modalBackdrop,
  buttonHandler,
}) => {
  const getDetailsItem = (title, value) => (
    <Row>
      <Col md={5} className="text-uppercase font-weight-bold text-right">`${title}:`</Col>
      <Col md={7} className="text-left">{value}</Col>
    </Row>
  );

  return (contract && Object.keys(contract).length) ? (
      <>
      <Button
        color="white"
        onClick={toggle}
        className="p-0 button_as-icon"
        tag="a"
        title="View contract details"
      >
        <FontAwesomeIcon icon={faEye} size="lg"/>
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
          {getDetailsItem('User name', `${contract.user.name} ${contract.user.surname}`)}
          {getDetailsItem('Amount in USD', contract.amountInUsd)}
          {getDetailsItem('Currency', contract.currency)}
          {getDetailsItem('Date', contract.date)}
        </ModalBody>

        <ModalFooter>
          <Button color="info" onClick={buttonHandler}>Got it</Button>
        </ModalFooter>
      </Modal>
      </>
    ) : null;
};
