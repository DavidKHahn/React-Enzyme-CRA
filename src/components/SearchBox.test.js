import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchBox from './SearchBox';

configure({adapter: new Adapter()});

it('expect to render SearchBox component', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot()
})