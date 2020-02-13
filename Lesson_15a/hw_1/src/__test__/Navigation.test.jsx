import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../header/Navigation';


describe('<Navigation/>', () => {
    it('should display Navigation', () => {
        const wrappedComponent = shallow(<Navigation/>)
        expect(wrappedComponent.find('header-date').exists()).toBeTruthy()
    })

});