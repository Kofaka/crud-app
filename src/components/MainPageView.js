import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';

import HeaderView from './HeaderView';
import ContractsTableView from './ContractsTableView';

const MainPageView = ({ chartData, contracts }) => (
  <>
  <HeaderView />

  <main className="mt-4">
    <Container>
      <Row>
        <Col>
          <Line data={chartData}/>
        </Col>
      </Row>

      <ContractsTableView contracts={contracts}/>
    </Container>
  </main>
  </>
);

export default MainPageView;