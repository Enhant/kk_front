import React from 'react';
import diamond from './images/diamond-forheader.png';
import bomb from './images/bomb-forHeader.png';
import classes from './MinesCardHeader.module.css';

interface IProps {
	minesCount: number;
	cardsCount: number;
}

const MinesCardHeader: React.FC<IProps> = ({ cardsCount, minesCount }) => {
	return (
		<div className={classes['header-minescards-wrapper']}>
			<div className={classes.diamonds}>
				<img src={diamond} alt="" />
				<span>{cardsCount - minesCount}</span>
			</div>
			<div className={classes.bombs}>
				<img src={bomb} alt="" />
				<span>{minesCount}</span>
			</div>
		</div>
	);
};

export default MinesCardHeader;
