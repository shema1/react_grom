import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../Dialog';

describe('Dialog', () => {
    it('Dialog be not display "isOpen" is false', () => {
      const wrappedComponent = shallow(<Dialog isOpen={false}  />)
      expect(wrappedComponent.find('.dialog').exists()).toEqual(false);
    });
  
    it('Dialog display "isOpen" is true', () => {
      const wrappedComponent = shallow(<Dialog isOpen />)
      expect(wrappedComponent.find('.dialog').exists()).toBeTruthy();
    });
  
    it('"onClose" should close Dialog', () => {
      const mock = jest.fn();
      const wrappedComponent = shallow(<Dialog isOpen onClose={mock} />)
      wrappedComponent.find('.dialog__close-btn').simulate('click')
      expect(mock).toBeCalled();
    });
  
    it('should display title', () => {
      const mock = jest.fn();
      const wrappedComponent = shallow(<Dialog isOpen onClose={mock} />)
      expect(wrappedComponent.find('.dialog__title').exists()).toBeTruthy();
    });
  
    it('Dialog should display "children"', () => {
      const mock = jest.fn();
      const wrappedComponent = shallow(<Dialog isOpen onClose={mock} ><span>0</span></Dialog>)
      expect(wrappedComponent.find('.dialog__content').text()).toEqual('0');
    });
  })