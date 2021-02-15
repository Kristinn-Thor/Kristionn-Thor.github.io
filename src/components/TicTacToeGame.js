import React from 'react';
import '../styles/TicTacToeGame.scss';
//-----Font Awesome Imports-----//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

function Square(props) {
    const className = 'square' + (props.lightOn ? '--Light-Mode' : '');
    return (
        <button
            className={`${className}${props.lumenate ? ' lumenate' : ''}`}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        const winLine = this.props.winLine;
        return (
            <Square
                key={`Square-${i}`}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                lumenate={winLine && winLine.includes(i)}
                lightOn={this.props.lightOn}
            />
        );
    }

    render() {
        let board = [];
        const boardSize = 3;
        for (let i = 0; i < boardSize; i += 1) {
            let row = [];
            for (let j = 0; j < boardSize; j += 1) {
                row.push(this.renderSquare(i * boardSize + j));
            }
            board.push(
                <div
                    key={i}
                    className={`board-row${this.props.lightOn ? '--Light-Mode' : ''}`}>
                    {row}
                </div>
            );
        }

        return (
            <>{board}</>
        );
    }
}

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            isAscending: true,
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleMoveOrder() {
        this.setState({
            isAscending: !this.state.isAscending
        });
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares).winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                latestMove: i
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winInfo = calculateWinner(current.squares);
        const winner = winInfo.winner;

        let moves = history.map((step, move) => {
            const latestMove = step.latestMove;
            const col = (latestMove % 3) + 1;
            const row = Math.floor(latestMove / 3) + 1;
            const desc = move ? `Go to move #${move} (${col}, ${row})` : 'Go to game start';
            return (
                <li key={move}>
                    <button
                        className='go-to-move'
                        onClick={() => this.jumpTo(move)}
                        style={this.props.lightOn ? { color: '#5562DD', border: 'solid', borderColor: '#5562DD' } : {}}
                    >
                        {desc}</button>
                </li>
            )
        });

        if (!this.state.isAscending) {
            moves.reverse();
        }

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (

            <div className="game">
                <button
                    title="Toggle dark mode"
                    className="DarkMode-btn"
                    onClick={this.props.onToggleLightMode}
                    aria-label="toggle dark mode">
                    <FontAwesomeIcon
                        icon={faAdjust}
                        style={{ color: `${this.props.lightOn ? '#5562DD' : '#29D9B9'}` }}
                    />
                </button>
                <div className="game-wrapper-left">
                    <div className="game-board">
                        <Board
                            squares={current.squares}
                            onClick={(i) => this.handleClick(i)}
                            winLine={winInfo.line}
                            lightOn={this.props.lightOn}
                        />
                    </div>
                </div>
                <div className="game-wrapper-right">
                    <div className="game-info">
                        <div className="game-info-status"
                            style={{ color: `${winner ? '#fc7beb' : `${this.props.lightOn ? '#5562DD' : '#29D9B9'}` }`}}>{status}
                            <button
                                className="order"
                                style={this.props.lightOn ? { color: '#5562DD', border: 'solid', borderColor: '#5562DD' } : {}}
                                onClick={() => this.handleMoveOrder()}
                            >
                                {this.state.isAscending ? 'Change to descending' : 'Chnage to ascending'}
                            </button>
                        </div>
                        <div className="game-info-buttons">
                            <ol>{moves}</ol>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

// ============== HELPER-FUNCTIONS ==========================

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner: squares[a],
                line: lines[i],
            };
        }
    }
    return {
        winner: null
    };
}
