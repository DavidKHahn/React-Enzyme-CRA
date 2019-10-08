import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CounterButton from './CounterButton';

configure({ adapter: new Adapter() });

it('expect to render CounterButton component', () => {
    const mockColor = 'red'
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
})

it('correctly increments the counter', () => {
    const mockColor = 'red'
    const wrapper = shallow(<CounterButton color={mockColor} />);
// 'simulate' a click event from the counter button
    wrapper.find('[id="counter"]').simulate('click')
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({ count: 2})
    wrapper.find('[id="counter"]').simulate('click')
    wrapper.find('[id="counter"]').simulate('keypress')
    expect(wrapper.state()).toEqual({ count: 3})
// target color directly
    expect(wrapper.props().color).toEqual('red')
})