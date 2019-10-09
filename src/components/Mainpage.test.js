import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import MainPage from '../components/MainPage';

configure({ adapter: new Adapter() });

let wrapper;
// built-in jest method makes sure to run before each test
beforeEach(() => {
    const mockProps = {
// 'jest.fn()' simple function dont run API call
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
// wrapper will receive all of the above props into the 'MainPage'
    wrapper = shallow(<MainPage {...mockProps }/>)
})

it('expect to render MainPage component', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
                onRequestRobots: jest.fn(),
                robots: [{
                    id: 3,
                    name: 'John',
                    email: 'john@gmail.com'
                }],
                searchField: 'a',
                isPending: false
            }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filterRobots()).toEqual([])
})
// redux-mock-store (npm package for redux store)
// we can also export the 'App' component using 'export class App extends Component {' ...and import just the App component into our tests