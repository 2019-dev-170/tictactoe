import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Components/Header/Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
	it('Test if Header componenet is renderes properly', () => {
		let wrapper = shallow(<Header />);
		expect(wrapper.containsAllMatchingElements([ <h1 className="Header">Welcome to Tic-Tac-Toe</h1> ])).toEqual(true);
	});
});
