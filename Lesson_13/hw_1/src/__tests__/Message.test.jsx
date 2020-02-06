import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message';


describe('Message', () => {
  it('text was not transmitted', () => {
    const wrappedComponent = shallow(<Message text={"some text"}/>);
    expect(wrappedComponent.find('.message').text()).toEqual("some text");
  });

  it('text was not transmitted the component will not be rendered', () => {
    const wrappedComponent = shallow(<Message text={'props'} />);
    expect(wrappedComponent.find('.message').exists()).toEqual(true);
  });
});

