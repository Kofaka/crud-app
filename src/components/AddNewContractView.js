import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddNewContractView = ({ submitHandler, inputChangeHandler }) => {
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
            <Col md={2}>
              <FormGroup>
                <Label for="userName">User name</Label>
                <Input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Name"
                  onChange={inputChangeHandler}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="userSurname">User Surname</Label>
                <Input
                  type="text"
                  name="userSurname"
                  id="userSurname"
                  placeholder="Surname"
                  onChange={inputChangeHandler}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="amountInUsd">Amount in USD</Label>
                <Input
                  type="text"
                  name="amountInUsd"
                  id="amountInUsd"
                  placeholder="0"
                  onChange={inputChangeHandler}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="currency">Currency</Label>
                <Input
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="ETH"
                  onChange={inputChangeHandler}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="date">Date</Label>
                <Input
                  type="text"
                  name="date"
                  id="date"
                  placeholder="2018-04-23"
                  onChange={inputChangeHandler}
                />
              </FormGroup>
            </Col>
            <Col md={2} className="d-flex align-items-end">
              <Button
                color="info"
                className="w-100 mb-3"
                type="submit"
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