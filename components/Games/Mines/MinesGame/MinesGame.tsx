import MinesCard from './MinesCard/MinesCard';
import MinesCardHeader from './MinesCardHeader/MinesCardHeader';
import classes from './MinesGame.module.css';
import React from 'react';
import { ICards } from '..';

interface IProps {
	isGameStarted: boolean
	minesCount: number
	cards: Array<ICards>
	setCards: React.Dispatch<React.SetStateAction<ICards[]>>
	setGameStarted: React.Dispatch<React.SetStateAction<boolean>>
}

const MinesGame: React.FC<IProps> = ({
	isGameStarted,
	minesCount,
	cards,
	setCards,
	setGameStarted,
}) => {
	const cardHandler = (id: number) => {
		if (isGameStarted) {
			setCards(p => {
				return p.map(card => {
					if (card.id === id) {
						if (card.type === 'mine') {
							setTimeout(() => {
								alert('Вы проиграли!');

								setCards(prev => {
									return prev.map(card => ({ ...card, isComplited: false }));
								});
							}, 0);

							setGameStarted(false);

							return { ...card, isComplited: true };
						}

						return { ...card, isComplited: true };
					} else {
						return card;
					}
				});
			});
		}
	};

	const cardList = cards.map(({ img, id, isComplited }) => {
		return (
			<MinesCard
				img={img}
				key={id}
				id={id}
				isComplited={isComplited}
				cardHandler={cardHandler}
			/>
		);
	});

	return (
		<div className={classes['Mines-game-wrapper']}>
			<MinesCardHeader minesCount={minesCount} cardsCount={cards.length} />
			<ul className={classes['card-list-wrapper']}>{cardList}</ul>
		</div>
	);
};

export default MinesGame;
