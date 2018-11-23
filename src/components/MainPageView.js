import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';

import HeaderView from './HeaderView';
import ContractsTable from '../containers/ContractsTable';
import AddNewContract from '../containers/AddNewContract';

const MainPageView = ({ chartData }) => (
  <>
  <HeaderView />

  <Container tag="main" className="mt-4">
    <Row className="mb-4">
      <Col>
        <Line data={chartData}/>
      </Col>
    </Row>
    <Row className="mb-4">
      <Col>
        <AddNewContract />
      </Col>
    </Row>
    <Row className="mb-4">
      <Col>
        <ContractsTable />
      </Col>
    </Row>
  </Container>
  </>
);

export default MainPageView;