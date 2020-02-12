import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.jsx.js';

describe('<App/>', () => {
    it('should display Todo List', () => {
        const wrappedComponent = shallow(<App/>)
        expect(wrappedComponent.find('TodoList').exists()).toBeTruthy()
    })
});