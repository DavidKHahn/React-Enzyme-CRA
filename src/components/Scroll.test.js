import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Scroll from './Scroll';

configure({adapter: new Adapter()});

it('expect to render Scroll component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot()
})