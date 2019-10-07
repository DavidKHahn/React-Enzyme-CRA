import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// configures tests
configure({ Adapter: new Adapter() });

// https://airbnb.io/enzyme/docs/api/shallow.html (To learn more about shallow, mount and render)