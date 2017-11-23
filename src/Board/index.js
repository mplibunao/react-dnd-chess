import React, { Component } from "react";
import PropTypes from "prop-types";
import Knight from "./Knight";
import Square from "./Square";

export default class Board extends Component {
    static propTypes = {
        knightPosition: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    }

    renderSquare(x, y) {
        const black = (x + y) % 2 === 1;
        console.log('black: ', black);

        const [knightX, knightY] = this.props.knightPosition;
        const piece = (x === knightX && knightY === y) ?
            <Knight /> :
            null;
        
        return (
            <Square black={black}>
                {piece}
            </Square>
        );
    }

    render() {
        return (
            <div style={{
                width: '100%',
                height: '100%'
            }}>
                {this.renderSquare(0,0)}
                {this.renderSquare(1,0)}
                {this.renderSquare(2,0)}
            </div>
        )
        
    }
}