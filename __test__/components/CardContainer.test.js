import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from '../../components/CardContainer';

describe('CardContainer', () => {
  let wrapper;
  let mockArtists = [
    {
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
    },
    {
      id: 2,
      artist: 'Brandy Bartlomieczak',
      city: 'New Orleans',
      state: 'Louisiana',
      country: 'United States',
      site: null,
      image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      time: '4:34 AM',
      date: '7/4/2019'
    },
    {
      id: 3,
      artist: 'Benson Klein',
      city: 'Buffalo',
      state: 'New York',
      country: 'United States',
      site: 'examiner.com',
      image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
      description:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      time: null,
      date: '2/26/2019'
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<CardContainer artists={mockArtists} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
