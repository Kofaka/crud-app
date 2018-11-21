import React from 'react';
import { Row, Col, Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import ContractsTableItemDetails from '../containers/ContractsTableItemDetails';
import ContractsTableEditItem from '../containers/ContractsTableEditItem';

import './ContractsTableView.css';

const getTableInfoRows = (data = {}, deleteHandler) => {
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
          <ContractsTableItemDetails contract={data[ item ]}/>
        </td>
        <td>
          <ContractsTableEditItem contract={data[ item ]}/>
        </td>
        <td>
          <Button
            color="white"
            onClick={() => deleteHandler(data[ item ].id)}
            className="p-0 button_as-icon"
            tag="a"
            title="Delete contract"
          >
            <FontAwesomeIcon icon={faTrashAlt} size="lg"/>
          </Button>
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