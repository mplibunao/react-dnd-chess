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

    render() {
        return (
            <div>
                <Square black>
                    <Knight />
                </Square>
            </div>
        )
        
    }
}