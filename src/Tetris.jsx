import React from 'react'
import Tetris from 'react-tetris'

const TetrisGame = () => (
    <div className='background-tetris'>
        <Tetris
            keyboardControls={{
                // Default values shown here. These will be used if no
                // `keyboardControls` prop is provided.
                down: 'MOVE_DOWN',
                left: 'MOVE_LEFT',
                right: 'MOVE_RIGHT',
                space: 'HARD_DROP',
                z: 'FLIP_COUNTERCLOCKWISE',
                x: 'FLIP_CLOCKWISE',
                up: 'FLIP_CLOCKWISE',
                p: 'TOGGLE_PAUSE',
                c: 'HOLD',
                shift: 'HOLD',
            }}
        >
            {({
                HeldPiece,
                Gameboard,
                PieceQueue,
                points,
                linesCleared,
                state,
                controller,
            }) => (
                <div>
                    <div>
                        {/* <p>Points: {points}</p>
                        <p>Lines Cleared: {linesCleared}</p> */}
                    </div>
                    <Gameboard />
                    {state === 'LOST' && (
                        <div>
                            <h2>Game Over</h2>
                            <button onClick={controller.restart}>
                                New game
                            </button>
                        </div>
                    )}
                </div>
            )}
        </Tetris>
    </div>
)

export default TetrisGame
