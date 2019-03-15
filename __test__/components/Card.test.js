import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../../components/Card';
// import events from '../static/mock_events.json';

describe('Card', () => {
  let wrapper;
  let mockArtist = {
    id: 1,
    artist: 'Deva Haycraft',
    city: 'El Paso',
    state: 'Texas',
    country: 'United States',
    site: 'naver.com',
    image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    time: '4:16 PM',
    date: '3/10/2019'
  };

  beforeEach(() => {
    wrapper = shallow(<Card cardDetails={mockArtist} key={mockArtist.id} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
