import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';

import HeaderView from './HeaderView';
import ContractsTable from '../containers/ContractsTable';
import AddNewContract from '../containers/AddNewContract';

const MainPageView = ({ chartData }) => (
  <>
  <HeaderView />

  <main className="mt-4">
    <Container>
      <Row className="mb-4">
        <Col>
          <Line data={chartData}/>
        </Col>
      </Row>

      <AddNewContract />

      <ContractsTable />
    </Container>
  </main>
  </>
);

export default MainPageView;