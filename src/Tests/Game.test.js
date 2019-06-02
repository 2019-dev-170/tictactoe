import React from 'react';
import { shallow , mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from '../Components/Game/Game';

configure({ adapter: new Adapter() });

describe('<Game />', () => {
	it('Test if 3x3 grid is formed in game component', () => {
		let wrapper = shallow(<Game />);
		expect(wrapper.find('div.box')).toHaveLength(9);
    });
})