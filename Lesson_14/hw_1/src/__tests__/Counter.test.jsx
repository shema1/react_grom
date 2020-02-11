import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter.jsx';

describe('Counter', () => {
    it('value should be 0', () => {
        const wrappedComponent = shallow(<Counter/>);
        expect(wrappedComponent.find('.counter__value').text()).toEqual('0');
    });

    it('value should be increased by 1 ', () => {
        const wrappedComponent = shallow(<Counter/>);
        wrappedComponent.find('.counter__button').last().simulate('click');
        expect(wrappedComponent.find('.counter__value').text()).toEqual('1');
    });

    it('value should be decrease by 1 ', () => {
        const wrappedComponent = shallow(<Counter/>);
        wrappedComponent.find('.counter__button').first().simulate('click');
        expect(wrappedComponent.find('.counter__value').text()).toEqual("-1");
    });
    it('value should be 0', () => {
        const wrappedComponent = shallow(<Counter/>);
        wrappedComponent.find('.counter__value').simulate('click');
        expect(wrappedComponent.find('.counter__value').text()).toEqual('0');
    });

})