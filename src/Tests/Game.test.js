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

    it('Test if handleSquareClick is triggered on click of square', () => {
        let wrapper = shallow(<Game />);
        let spy = jest.spyOn(wrapper.instance(), 'handleSquareClick');
        wrapper.find('div.box').first().simulate('click');
        expect(spy).toHaveBeenCalled();
    });

    it('Test if handleSquareClick is updating board', () => {
        let wrapper = shallow(<Game />);
        wrapper.setState({
            board : Array(9).fill(null),
            currentPlayer : "X"
        })
        wrapper.instance().handleSquareClick(5);
        expect(wrapper.instance().state.board[5]).toEqual("X");
    });

    it('Test if handleSquareClick is updating currentPlayer to O after X', () => {
        let wrapper = shallow(<Game />);
        wrapper.setState({
            board : Array(9).fill(null),
            currentPlayer : "X"
        })
        wrapper.instance().handleSquareClick(5);
        expect(wrapper.instance().state.currentPlayer).toEqual("O");
    });

    it('Test if handleSquareClick is updating alternatly X and O on click', () => {
        let wrapper = shallow(<Game />);
        wrapper.setState({
            board : Array(9).fill(null),
            currentPlayer : "X"
        })
        wrapper.instance().handleSquareClick(5);
        expect(wrapper.instance().state.board[5]).toEqual("X");
        wrapper.instance().handleSquareClick(0);
        expect(wrapper.instance().state.board[0]).toEqual("O");
    });

    it('Test if handleSquareClick is not updating currentPlayer on multiclicks', () => {
        let wrapper = shallow(<Game />);
        wrapper.setState({
            board: Array(9).fill(null),
            currentPlayer : "X"
        })
        wrapper.instance().handleSquareClick(5);
        expect(wrapper.instance().state.board[5]).toEqual("X");
        expect(wrapper.instance().state.currentPlayer).toEqual("O");
        wrapper.instance().handleSquareClick(5);
        expect(wrapper.instance().state.currentPlayer).toEqual("O");
    })

    it('Test if handleSquareClick is not updating board on multiclicks', () => {
        let wrapper = shallow(<Game />);
        wrapper.setState({
            board : Array(9).fill(null),
            currentPlayer: "X"
        })
        wrapper.instance().handleSquareClick(5);
        expect(wrapper.instance().state.board[5]).toEqual("X");
        wrapper.instance().handleSquareClick(5);
        expect(wrapper.instance().state.board[5]).toEqual("X");
    })
})