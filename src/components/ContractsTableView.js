import React from 'react';
import { Row, Col, Table, Button } from 'reactstrap';

import './ContractsTableView.css';
import ContractsTableItemDetails from '../containers/ContractsTableItemDetails';

const getTableInfoRows = (data = {}, handler) => {
  let rows = [];
  (Object.keys(data).length) && Object.keys(data).map((item, index) => (
    rows.push(
      <tr key={`${index}_${data[ item ].user.name}_${data[ item ].user.surname}`}>
        <th scope="row">{data[ item ].id}</th>
        <td>{data[ item ].user.name} {data[ item ].user.surname}</td>
        <td>{data[ item ].amountInUsd}</td>
        <td>{data[ item ].currency}</td>
        <td>{data[ item ].date}</td>
        <td>
          <Button
            color="info"
            className="w-100"
            onClick={() => handler(data[ item ].id)}
          >
            Delete contract
          </Button>
        </td>
        <td>
          <ContractsTableItemDetails
            contract={data[ item ]}
            buttonLabel="Show details"
          />
        </td>
      </tr>
    )
  ));
  return rows;
};

const ContractsTableView = ({ contracts, deleteHandler }) => (
  <>
  <Row>
    <Col>
      <h1 className="contracts-table__header text-center my-2">Contracts list</h1>
    </Col>
  </Row>
  <Row>
    <Col>
      <Table dark striped borderless hover>
        <thead>
        <tr>
          <th>#</th>
          <td>User name</td>
          <td>Amount in USD</td>
          <td>Currency</td>
          <td>Date</td>
        </tr>
        </thead>
        <tbody>
        {getTableInfoRows(contracts, deleteHandler)}
        </tbody>
      </Table>
    </Col>
  </Row>
  </>
);

export default ContractsTableView;