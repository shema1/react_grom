import React from "react";
import { shallow, mount } from 'enzyme'
import GuestGreeting from "../GuestGreeting";

describe('UserGreeting', () => {
  it('should display user greeting', () => {
    const wrappedComponent = shallow(<GuestGreeting/>)
    expect(wrappedComponent).toMatchSnapshot();
  });
});