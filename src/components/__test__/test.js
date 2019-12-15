import React from 'react';
import ReactDOM from "react-dom";
import { shallow, mount, render} from 'enzyme';
import App from "../../app.jsx";
import { Item } from 'semantic-ui-react';
// import { render, fireEvent, getByTestId} from "react-testing-library";
it('renders without crashing', () => {
  ReactDOM.render(<App/>, div);
  console.log('true');
  ReactDOM.unmountComponentAtNode(div);
});

