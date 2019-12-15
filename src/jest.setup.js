const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
import { configure } from 'enzyme';
configure({ adapter: new EnzymeAdapter() });

