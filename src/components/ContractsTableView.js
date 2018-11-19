import React from 'react';
import { Row, Col, Table } from 'reactstrap';

import './ContractsTableView.css';

const getTableInfoRows = (data = []) => {
  let rows = [];
  (data.length) && data.map((item, index) => (
    rows.push(
      <tr key={`${index}_${item.user.name}_${item.user.surname}`}>
        <th scope="row">{index}</th>
        <td>{item.user.name} {item.user.surname}</td>
        <td>{item.amountInUsd}</td>
        <td>{item.currency}</td>
        <td>{item.date}</td>
      </tr>
    )
  ));
  return rows;
};

const ContractsTable = ({ contracts }) => (
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
        {getTableInfoRows(contracts)}
        </tbody>
      </Table>
    </Col>
  </Row>
  </>
);

export default ContractsTable;