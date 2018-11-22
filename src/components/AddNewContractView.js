import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddNewContractView = ({ submitHandler, inputChangeHandler, disableSubmit }) => {
  const getFormGroup = (label, inputType, id, placeholder) => (
    <Col md={2}>
      <FormGroup>
        <Label for={id}>{label}</Label>
        <Input
          type={inputType}
          name={id}
          id={id}
          placeholder={placeholder}
          onChange={inputChangeHandler}
        />
      </FormGroup>
    </Col>
  );

  return (
    <>
    <Row>
      <Col>
        <h1 className="contracts-table__header text-center my-2">Add new Contract</h1>
      </Col>
    </Row>

    <Form className="mb-4" onSubmit={submitHandler}>
      <Row form>
        <Col>
          <Row>
            {getFormGroup('User name', 'text', 'name', 'Name')}
            {getFormGroup('User Surname', 'text', 'surname', 'Surname')}
            {getFormGroup('Amount in USD', 'number', 'amountInUsd', '0')}
            {getFormGroup('Currency', 'text', 'currency', 'ETH')}
            {getFormGroup('Date', 'date', 'date', '2018-04-23')}

            <Col md={2} className="d-flex align-items-end">
              <Button
                color="info"
                className="w-100 mb-3"
                type="submit"
                disabled={disableSubmit}
              >
                Add contract
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
    </>
  );
};

export default AddNewContractView;
