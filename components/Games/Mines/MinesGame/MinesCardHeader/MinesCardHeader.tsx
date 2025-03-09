import React from 'react';
import classes from './MinesCardHeader.module.css';

interface IProps {
	minesCount: number;
	cardsCount: number;
}

const MinesCardHeader: React.FC<IProps> = ({ cardsCount, minesCount }) => {
	return (
		<div className={classes['header-minescards-wrapper']}>
			<div className={classes.diamonds}>
				<img src={'url(/kk_frontend/images/diamond-forheader.png)'} alt="" />
				<span>{cardsCount - minesCount}</span>
			</div>
			<div className={classes.bombs}>
				<img src={'url(/kk_frontend/images/bomb-forHeader.png)'} alt="" />
				<span>{minesCount}</span>
			</div>
		</div>
	);
};

export default MinesCardHeader;
