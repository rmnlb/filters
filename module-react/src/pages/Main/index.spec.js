import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Main from '../Main'

configure({
    adapter: new Adapter()
});

describe('<Main/> first react test', () => {
   const wrapper = shallow(<Main/>);
   it('Should render', () => {
      expect(wrapper.length).toEqual(1);
   })
});
