import React from 'react';
import { shallow, mount } from 'enzyme';
import Head from '../../components/Head';

describe('Head', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Head />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
