import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Card from './Card';

configure({adapter: new Adapter()});

// 'render' used to render react components to a static html (uses cheerio under the hood)
// 'mount' (used with js dom) complicated, does a full render, actually mounts a component on DOM and tests can affect others.
// using 'shallow' allows testing one component at a time without affecting child components
it('expect to render Card component', () => {
    expect(shallow(<Card />).length).toEqual(1)
})