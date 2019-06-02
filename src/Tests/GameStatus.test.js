import React from 'react';
import { shallow , mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameStatus from '../Components/GameStatus/GameStatus';

configure({ adapter: new Adapter() });


describe('<GameStatus', () => {

    it('Test if renderGameStatus is setting  correct status ', () => {
        let wrapper = shallow(<GameStatus currentPlayer="X" winner= {null} noOfMoves={1} />)
        expect(wrapper.find('h3').text()).toEqual('Current Player : X');
    });

    it('Test if renderGameStatus is setting  correct status', () => {
        let wrapper = shallow(<GameStatus currentPlayer="X" winner= "O" noOfMoves={5} />)
        expect(wrapper.find('h3').text()).toEqual('O is Winner');
    });

    it('Test if renderGameStatus is setting  correct status', () => {
        let wrapper = shallow(<GameStatus currentPlayer="X" winner= {null} noOfMoves={9} />)
        expect(wrapper.find('h3').text()).toEqual('Match is a Draw');
    });

})