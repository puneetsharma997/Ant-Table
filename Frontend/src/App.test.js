import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

import App from './App';
import AntTable from './component/AntTable';

describe('App ', () => {

    it ('should have class with name App', () => {
        const component = shallow(<App />);
        expect(component.find('.App').exists()).toBe(true)
    })

    it ('should have a div tag', () => {
        const component = shallow(<App />);
        expect(component.find('div').exists()).toBe(true)
    })

    it ('should have a Ant Table Component', () => {
        const component = shallow(<App />);
        expect(component.find(AntTable).exists()).toBe(true)
    })
  
})
