import React from 'react'
import FilterPanel from '../FilterPanel'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FilterItem from "../../components/FilterItem";

configure({
    adapter: new Adapter()
});

describe('<FilterPanel/> tests', () => {
    let propsElements;
    let wrapper;

    it('Should create 5 FilterItem elements', () => {
        propsElements = [
            'first',
            'second',
            'third'
        ];
        wrapper = shallow(<FilterPanel
            elements={propsElements}
            setFilter={()=>{}}
        />);
        expect(wrapper.find(FilterItem)).toHaveLength(5);
    });

    it('Should create 8 FilterItem elements', () => {
        propsElements = [
            'tag1',
            'tag2',
            'tag3',
            'tag4',
            'tag5',
            'tag6'
        ];
        wrapper = shallow(<FilterPanel
            elements={propsElements}
            setFilter={()=>{}}
        />);
        expect(wrapper.find(FilterItem)).toHaveLength(8);
    });

});