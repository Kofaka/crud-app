import React from 'react';
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const ContractsTableEditItemView = ({
  data,
  buttonLabel,
  modalIsOpen,
  toggle,
  modalBackdrop,
  cancelHandler,
  submitHandler,
  inputChangeHandler,
  disableSubmit
}) => {
  const getFormGroup = (label, inputType, id, placeholder, defaultValue) => (
    <Row className="mb-4">
      <Col>
        <FormGroup>
          <Label for={id}>{label}</Label>
          <Input
            type={inputType}
            name={id}
            id={id}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={inputChangeHandler}
          />
        </FormGroup>
      </Col>
    </Row>
  );

  return (
    <>
    <Button color="info" onClick={toggle}>{buttonLabel}</Button>

    <Modal
      isOpen={modalIsOpen}
      toggle={toggle}
      backdrop={modalBackdrop}
      size="lg"
    >
      <ModalHeader toggle={toggle}>
        Edit data <span className="text-info">#{data.id}</span>
      </ModalHeader>

      <Form className="mb-4" onSubmit={submitHandler}>
        <ModalBody>
          <Row form>
            <Col>
              {getFormGroup('User name', 'text', 'name', 'Name', data.name)}
              {getFormGroup('User Surname', 'text', 'surname', 'Surname', data.surname)}
              {getFormGroup('Amount in USD', 'number', 'amountInUsd', '0', data.amountInUsd)}
              {getFormGroup('Currency', 'text', 'currency', '0', data.currency)}
              {getFormGroup('Date','text', 'date', '2018-04-23', data.date)}
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={cancelHandler}>Cancel</Button>
          <Button color="info" onClick={submitHandler} disabled={disableSubmit}>Save</Button>
        </ModalFooter>
      </Form>
    </Modal>
    </>
  );
};

export default ContractsTableEditItemView;
