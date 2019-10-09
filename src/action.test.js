// npm i redux-mock-store (for use of 'dispatch' testing)
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from './actions';
import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING } from './constants';
// you can also export 'mockStore' to make actions available for all tests
const mockStore = configureMockStore([thunkMiddleware])
it('should create an action to search robots', () => {
    const text = 'woooo';
    const expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handles requesting robots API', () => {
// create a fake store which has thunkMiddleware so it waits for any fns that are returned from an action
    const store = mockStore();
// dispatch gets sent into 'requestRobots'()
    store.dispatch(actions.requestRobots())
// receive actions which would be the PENDING action (1st one)
    const action = store.getActions();
// console.log('action', action)
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }
// grabs first item in 'action' array
    expect(action[0]).toEqual(expectedAction)
})

// USEFUL: npm nock -> setup for mock pretend url calls for asynchronous tests
// npm supertest -> also great for api testing