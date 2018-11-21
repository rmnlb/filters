import React from 'react'
import FilterItem from '../FilterItem'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SearchInput from "../SearchInput";

configure({
    adapter: new Adapter()
});

describe('<FilterItem/> tests', () => {
    let wrapper;

    it('Should radio button be checked', () => {

        wrapper=shallow(<FilterItem
            label='All'
            defaultChecked={true}
        />);

        expect(wrapper.find('input').prop('checked')).toBe.true;
    });

    it('Should contain SearchInput element', () => {
        wrapper=shallow(<FilterItem
            label='search'
            disabled={''}
        />);
        expect(wrapper.find(SearchInput)).toHaveLength(1);
    })
})