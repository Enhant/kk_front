import React, { Component } from 'react';
import classes from './Board.module.css';
import Square from 'common/ColoredCircle';
import Auxillary from '../Auxillary';

class Board extends Component {
    render(){
        let numbers = [...Array(this.props.gamersLength).keys()]
        // numbers.splice(8, 0, "00")
        let output = []
        for(let i = 0; i < (100 / this.props.gamersLength); i++){
            output.push(...numbers);
        }

        const squares = (
            <Auxillary>
                {output.map((number, index) => {
                    return <Square
                        key={index}
                        number={this.props.gamers[index % this.props.gamers.length]}
                    />
                })}
            </Auxillary>
        )
        // Random Scroll Px Value
        let style = {
            transition: "all 7999ms cubic-bezier(0, 0, 0.28, 1) 0s",
            transform: "matrix(1, 0, 0, 1, " + this.props.chosen_number * -1 + ", 0)"
        }
        let containerClasses = [classes.spinItemsContainer];
        let spinner = null;
        // Spin logic, checks if the spin bool is set to true and if so, the animation is added
        if(this.props.spin === true){
            spinner = (
                <div style={style} className={containerClasses.join(" ")}>
                    {squares}
                </div>
            )
        } else{
            spinner = (
                <div className={containerClasses.join(" ")}>
                    {squares}
                </div>
            )
        }
        return (
            <Auxillary>
                <div className={classes.outer}>
                    <div className={classes.spinContainer}>
                        {spinner}
                    </div>
                </div>
            </Auxillary>

        )
    }

}

export default Board