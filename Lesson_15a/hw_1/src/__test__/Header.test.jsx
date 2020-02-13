import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header/Header';


describe('<Header/>', () => {
    it('should display Navigation', () => {
        const wrappedComponent = shallow(<Header/>)
        expect(wrappedComponent.find('Navigation').exists()).toBeTruthy()
    })

    it('should display Days', () => {
        const wrappedComponent = shallow(<Header/>)
        expect(wrappedComponent.find('Days').exists()).toBeTruthy()
    })
});