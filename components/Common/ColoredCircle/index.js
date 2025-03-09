import React from 'react';
import classes from './ColoredCircle.module.css';
import Auxillary from '../../Games/Classic/components/Roulette/Auxillary';
import rnc from 'randomcolor';


const Square = (props) => {
    const assignedClasses = [classes.square];
    return (
        <Auxillary>
            <p 
                onClick={props.click} 
                style={{ background: !!props.number ? rnc({
                    seed: props.number,
                    luminosity: 'dark'
                }) : '#555' }}
                className={assignedClasses.join(" ")}
            >
            </p>
        </Auxillary>
    )
}

export default Square