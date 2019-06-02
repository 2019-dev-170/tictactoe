import React from "react";
import { shallow, mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Game from "../Components/Game/Game";

configure({ adapter: new Adapter() });

describe("<Game />", () => {
  it("Test if 3x3 grid is formed in game component", () => {
    let wrapper = shallow(<Game />);
    expect(wrapper.find("div.box")).toHaveLength(9);
  });

  it("Test if handleSquareClick is triggered on click of square", () => {
    let wrapper = shallow(<Game />);
    let spy = jest.spyOn(wrapper.instance(), "handleSquareClick");
    wrapper
      .find("div.box")
      .first()
      .simulate("click");
    expect(spy).toHaveBeenCalled();
  });

  it("Test if handleSquareClick is updating board", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: Array(9).fill(null),
      currentPlayer: "X"
    });
    wrapper.instance().handleSquareClick(5);
    expect(wrapper.instance().state.board[5]).toEqual("X");
  });

  it("Test if handleSquareClick is updating currentPlayer to O after X", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: Array(9).fill(null),
      currentPlayer: "X"
    });
    wrapper.instance().handleSquareClick(5);
    expect(wrapper.instance().state.currentPlayer).toEqual("O");
  });

  it("Test if handleSquareClick is updating alternatly X and O on click", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: Array(9).fill(null),
      currentPlayer: "X"
    });
    wrapper.instance().handleSquareClick(5);
    expect(wrapper.instance().state.board[5]).toEqual("X");
    wrapper.instance().handleSquareClick(0);
    expect(wrapper.instance().state.board[0]).toEqual("O");
  });

  it("Test if handleSquareClick is not updating currentPlayer on multiclicks", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: Array(9).fill(null),
      currentPlayer: "X"
    });
    wrapper.instance().handleSquareClick(5);
    expect(wrapper.instance().state.board[5]).toEqual("X");
    expect(wrapper.instance().state.currentPlayer).toEqual("O");
    wrapper.instance().handleSquareClick(5);
    expect(wrapper.instance().state.currentPlayer).toEqual("O");
  });

  it("Test if handleSquareClick is not updating board on multiclicks", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: Array(9).fill(null),
      currentPlayer: "X"
    });
    wrapper.instance().handleSquareClick(5);
    expect(wrapper.instance().state.board[5]).toEqual("X");
    wrapper.instance().handleSquareClick(5);
    expect(wrapper.instance().state.board[5]).toEqual("X");
  });

  it("Test if checkWinner is setting winner horizontally", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: ["X", "X", "X", "O", "O", null, null, null, null],
      currentPlayer: "X",
      winner: null
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual("X");
  });

  it("Test if checkWinner is setting winner horizontally", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: ["O", "O", null, "X", "X", "X", null, null, null],
      currentPlayer: "X",
      winner: null
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual("X");
  });

  it("Test if checkWinner is setting winner horizontally", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: ["X", "X", null, "X", null, null, "O", "O", "O"],
      currentPlayer: "O",
      winner: null
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual("O");
  });

  it("Test if checkWinner is setting winner vertically", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: ["X", "O", null, "X", null, null, "X", null, "O"],
      currentPlayer: "X",
      winner: null
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual("X");
  });

  it("Test if checkWinner is setting winner vertically", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: ["X", "O", null, "X", "O", null, "X", "O", "O"],
      currentPlayer: "O",
      winner: null
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual("O");
  });

  it("Test if checkWinner is setting winner vertically", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: ["O", "X", "X", "X", null, "X", "O", "O", "X"],
      currentPlayer: "X",
      winner: null
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual("X");
  });

  it("Test if checkWinner is setting winner diagonally", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: ["O", "X", "X", null, "O", "X", "O", "X", "O"],
      currentPlayer: "O",
      winner: null
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual("O");
  });

  it("Test if checkWinner is setting winner diagonally", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
      board: ["O", "X", "X", "X", "X", null, "X", "O", null],
      currentPlayer: "X",
      winner: null
    });
    wrapper.instance().checkWinner();
    expect(wrapper.instance().state.winner).toEqual("X");
  });

  it("Test if handleSquareClick is not updating board and currentPlayer after a win", () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
        board: ["X", "X", null, "X", null, null, "O", "O", "O"],
        currentPlayer: "X",
        winner: "O"
    });
    wrapper.instance().handleSquareClick(2);
    expect(wrapper.instance().state.board[2]).toEqual(null);
    expect(wrapper.instance().state.currentPlayer).toEqual("X");
  });

  it('Test if handleSquareClick ', () => {
    let wrapper = shallow(<Game />);
    wrapper.setState({
        board :["O","X","X","X","O","O","O","O","X"],
        currentPlayer : "O",
        winner: null,
        noOfMoves: 9
    })
    let status  = wrapper.instance().renderGameStatus();
    expect(wrapper.find('h3.draw').text()).toEqual('Match is a Draw');
});
});
