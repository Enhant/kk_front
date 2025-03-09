import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { ICards } from '..';
import BetInput from './BetInput';
import { ControlButtons } from './ControlButtons';

interface IProps {
	isGameStarted: boolean;
	setGameStarted: Dispatch<SetStateAction<boolean>>;
	minesCount: number;
	setMinesCount: Dispatch<SetStateAction<number>>;
	setCards: Dispatch<SetStateAction<ICards[]>>;
}

const BetTabPanel: React.FC<IProps> = ({
	isGameStarted,
	setGameStarted,
	minesCount,
	setMinesCount,
	setCards,
}) => {
	const classes = useStyles();
	const [bet, setBet] = useState(0);

	return (
		<Grid className={classes.betPanel}>
			<Grid className={classes.bet} container direction="column">
				<Grid  className={classes.betLabel}>
					ставка
				</Grid>
				<Grid >
					<BetInput bet={bet} setBet={setBet} isGameStarted={isGameStarted} />
				</Grid>
				<Grid  className={classes.betLabel}>
					Число бомб
				</Grid>
				<ControlButtons
					setCards={setCards}
					bet={bet}
					isGameStarted={isGameStarted}
					setGameStarted={setGameStarted}
					minesCount={minesCount}
					setMinesCount={setMinesCount}
				/>
			</Grid>
		</Grid>
	);
};

const useStyles = makeStyles({
	betPanel: {
		maxWidth: '100%',
		background: 'rgba(85, 28, 139, 0.8)',
		borderRadius: 5,
		padding: '20px 20px 26px',
	},
	bet: {
		marginBottom: 2,
	},
	betLabel: {
		color: '#FFFFFF',
		fontWeight: 200,
		fontSize: 12,
		textTransform: 'uppercase',
		marginBottom: 5,
	},
});

export default BetTabPanel;
