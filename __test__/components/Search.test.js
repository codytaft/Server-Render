import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../../components/Search';
// import events from '../static/mock_events.json';

describe('Search', () => {
  let wrapper;
  let mockInput = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Search onChange={mockInput} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change state on change', () => {
    const mockEvent = {
      target: {
        name: 'search',
        value: 'dev'
      }
    };

    wrapper.find('.search-input').simulate('change', mockEvent);
    expect(mockInput).toHaveBeenCalledWith('dev');
  });
});
