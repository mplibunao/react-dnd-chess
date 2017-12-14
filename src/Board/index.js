import React, { Component } from "react";
import PropTypes from "prop-types";
import Knight from "./Knight";
import BoardSquare from "./BoardSquare";
import Square from "./Square";
// import { moveKnight, canMoveKnight } from "../Game";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from "react-dnd-html5-backend"

class Board extends Component {
    static propTypes = {
        knightPosition: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    }

    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i/8);
        return (
            <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
                <BoardSquare x={x} y={y}>
                    {this.renderPiece(x, y)}
                </BoardSquare>
            </div>
        );
    }

    renderPiece(x, y) {
        const [knightX, knightY] = this.props.knightPosition;
		const isKnightHere = x === knightX && y === knightY;
		return isKnightHere ? <Knight /> : <div>1</div>;
    }

    // handleSquareClick(toX, toY) {
    //     if (canMoveKnight(toX, toY)) {
    //         moveKnight(toX, toY);
    //     }
    // }

    render() {
        const squares = [];
        for (let i=0; i<64; i++) {
            squares.push(this.renderSquare(i));
        }
        return (
            <div className="container">
                <div className="Board" style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
                    {squares}
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Board);