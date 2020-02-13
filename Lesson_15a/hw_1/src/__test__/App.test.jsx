import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import {getEventsList,createEvents,updateEvents,getEvents,deleteEvents } from '../eventsGateaway'


jest.mock("../eventsGateaway",()=>{
    return{
        getEventsList: jest.fn(()=>Promise.resolve([])),
        createEvents: jest.fn(),
        updateEvents: jest.fn(),
        getEvents: jest.fn(),
        deleteEvents: jest.fn()
    }
})
describe('<App/>', () => {
    it('should display Header', () => {
        const wrappedComponent = shallow(<App/>)
        expect(wrappedComponent.find('Header').exists()).toBeTruthy()
    })

    it('should display Table', () => {
        const wrappedComponent = shallow(<App/>)
        expect(wrappedComponent.find('Table').exists()).toBeTruthy()
    })
});