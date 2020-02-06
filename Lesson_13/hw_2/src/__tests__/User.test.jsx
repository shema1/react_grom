import React from 'react';
import { shallow } from 'enzyme';
import User from '../User';


describe('Message', () => {
  it('variable was not transmitted', () => {
    const wrappedComponent = shallow(<User name={"Mykola"}/>);
    expect(wrappedComponent.find('.user__name').text()).toEqual("Mykola");
  });

  it('variable was not transmitted', () => {
    const wrappedComponent = shallow(<User age={23}/>);
    expect(wrappedComponent.find('.user__age').text()).toEqual("23");
  });
});

