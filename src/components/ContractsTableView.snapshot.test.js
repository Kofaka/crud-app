import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer';

import ContractsTableView from './ContractsTableView';

const setup = (propsOverrides) => {
  const props = Object.assign({
    contracts: [
      {
        "user": {
          "name": "Cory",
          "surname": "Tory"
        },
        "amountInUsd": "34900",
        "currency": "ETH",
        "date": "2018-11-13"
      },
      {
        "user": {
          "name": "Yugi",
          "surname": "Wertyujk"
        },
        "amountInUsd": "128900",
        "currency": "ETH",
        "date": "2018-01-17"
      },
    ]
  }, propsOverrides);

  return {
    props
  };
};

describe('Component: ContractsTableView', () => {
    it('renders without crashing', () => {
        const {props} = setup();
        const view = shallow(<ContractsTableView {...props} />);
        expect(view).toMatchSnapshot();
    });
});

