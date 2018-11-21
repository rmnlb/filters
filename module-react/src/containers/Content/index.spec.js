import React from 'react'
import Content from '../Content'
import ContentItem from '../../components/ContentItem'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'



configure({
    adapter: new Adapter()
});

describe('<Content/> first react test', () => {
    let wrapper;
    let elements = [
        {
            name: 'first',
            tags: []
        },
        {
            name: 'second',
            tags: []
        },
        {
            name: 'third',
            tags: []
        },
    ];
    it('Should render', () => {
        elements = elements = [
            {
                name: 'first',
                tags: []
            },
            {
                name: 'second',
                tags: []
            },
            {
                name: 'third',
                tags: []
            },
        ];
        wrapper = shallow(<Content
            elements={elements}
        />);
        expect(wrapper.find(ContentItem)).toHaveLength(3);
    });

});
