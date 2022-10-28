import React from 'react'
import { useGameLife } from 'react-game-life'
import { Context, SnakeGame } from 'react-game-snake'
const HeroPage = () => {
    return (
        <SnakeGame
            colors={{
                field: '#bdc3c7',
                food: '#ff0000',
                snake: '#3498db',
            }}
            countOfHorizontalFields={26}
            countOfVerticalFields={30}
            fieldSize={20}
            loopTime={150}
            pauseAllowed={true}
            restartAllowed={false}
            onLoose={(context) =>
                console.log(`You Lost with ${context.game.points} points.`)
            }
            onPause={(context) => alert('paused')}
            onRestart={(context) => alert('restarted')}
            onResume={(context) => alert('onResume')}
            onWin={(context) =>
                console.log(`You won with ${context.game.points} points.`)
            }
        />
    )
}

const GameOfLife = () => {
    const [game, canvasRef] = useGameLife({
        game: { delay: 100 },
        graphics: {
            colors: { background: '#FFF', cell: '0E0E0E' },
            board: { height: 800, width: 1200 },
        },
    })

    return <canvas ref={canvasRef}></canvas>
}
export default HeroPage
