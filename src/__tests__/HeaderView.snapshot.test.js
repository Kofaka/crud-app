import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme'

import HeaderView from '../components/HeaderView';

const setup = (propsOverrides) => {
  const props = Object.assign({}, propsOverrides);

  return {
    props
  };
};

describe('Component: HeaderView', () => {
    it('renders without crashing', () => {
        const {props} = setup();
        const view = shallow(<HeaderView {...props} />);
        expect(view).toMatchSnapshot();
    });
});

