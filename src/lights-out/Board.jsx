import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.3
  }

  constructor(props) {
    super(props);


    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }

    // this.createBoard = this.createBoard(this)
    // this.flipCellsAround = this.flipCellsAround(this)

  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    const board = []
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < this.props.nrows; i++) {
      let row = []
      for (let j = 0; j < this.props.ncols; j++) {
        const chance = (Math.random() < this.props.chanceLightStartsOn)
          ? true
          : false
        row.push(chance)
      }
      board.push(row)
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    console.log('flipping ', coord)
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    // TODO: flip this cell and the cells around it
    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x)
    flipCell(y - 1, x)
    flipCell(y + 1, x)
    flipCell(y, x + 1)
    flipCell(y, x - 1)

    // TODO: determine is the game has been won
    let hasWon = board.every(row => row.every(cell => !cell))
    this.setState({ board, hasWon });

  }


  /** Render game board or winning message. */

  render() {
    // if the game is won, just show a winning msg & render nothing else
    if (this.state.hasWon) {
      return (
        <div className="Board-title">
          <h1 className="neon-blue">You Win!</h1>
        </div>
      )
    }
    let boardData = []
    for (let i = 0; i < this.props.nrows; i++) {
      let row = []
      for (let j = 0; j < this.props.ncols; j++) {
        let coord = `${i}-${j}`
        row.push(<Cell key={coord} id={coord} isLit={this.state.board[i][j]} flip={() => this.flipCellsAround(coord)} />)
      }
      boardData.push(<tr key={i}>{row}</tr>)
    }

    return (
      <div>
        <div className="Board-title">
          <div className="neon-orange">Lights</div>
          <div className="neon-blue">Out</div>
        </div>
        <table className="Board">
          <tbody>
            {boardData}
          </tbody>
        </table >
      </div>
    )
    // TODO
  }
}


export default Board;
