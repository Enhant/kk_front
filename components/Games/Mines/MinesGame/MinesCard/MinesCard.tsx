import React from 'react';
import classes from './MinesCard.module.css';

interface IProps {
	img: string;
	cardHandler: (id: number) => void;
	id: number;
	isComplited: boolean;
};

const MinesCard: React.FC<IProps> = ({ img, cardHandler, id, isComplited }) => {
	const hideClass = !isComplited
		? `${classes.card}`
		: `${classes.card} ${classes.flip}`;

	return (
		<li className={hideClass} onClick={() => cardHandler(id)}>
			<div className={classes.front}></div>
			<div className={classes.back}>
				<img className={classes['mines-card-img']} src={img} alt="" />
			</div>
		</li>
	);
};

export default MinesCard;
