import { Grid, IconButton, InputBase } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ICards } from '..';
import { makeStyles } from '@mui/styles';

type TProps = {
	minesCount: number;
	setMinesCount: Dispatch<SetStateAction<number>>;
	isGameStarted: boolean;
	setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
	bet: number;
	setCards: React.Dispatch<React.SetStateAction<ICards[]>>;
};

export const ControlButtons: React.FC<TProps> = ({
	minesCount,
	setMinesCount,
	isGameStarted,
	setGameStarted,
	bet,
	setCards,
}) => {
	const classes = useStyles();

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const count: string = event.currentTarget.value;
		const minMinesCount: number = 1;

		if (
			parseInt(count) >= minMinesCount &&
			parseInt(count) < 25 &&
			!count.startsWith('0')
		) {
			setMinesCount(parseInt(count));
		}
	};

	const handlePlay = () => {
		if (isGameStarted) {
			setGameStarted(false);
			setCards(prev => {
				return prev.map(card => ({ ...card, isComplited: false }));
			});

			return;
		}

		setGameStarted(true);
	};

	const handleChangeMinesCount = (minesCount: number) => () => {
		setMinesCount(minesCount);
	};

	return (
		<Grid className={classes.root}>
			<Grid className={classes.buttons}>
				<IconButton
					disabled={isGameStarted}
					onClick={handleChangeMinesCount(3)}
					className={classes.button}
				>
					3
				</IconButton>
				<IconButton
					disabled={isGameStarted}
					onClick={handleChangeMinesCount(5)}
					className={classes.button}
				>
					5
				</IconButton>
				<IconButton
					disabled={isGameStarted}
					onClick={handleChangeMinesCount(10)}
					className={classes.button}
				>
					10
				</IconButton>
				<IconButton
					disabled={isGameStarted}
					onClick={handleChangeMinesCount(24)}
					className={classes.button}
				>
					24
				</IconButton>
				<InputBase
					disabled={isGameStarted}
					value={minesCount}
					inputProps={{
						style: { padding: 0, textAlign: 'center' },
					}}
					onChange={handleInputChange}
					className={classes.input}
				/>
			</Grid>
			<Grid>
				<IconButton
					disabled={!bet}
					onClick={handlePlay}
					className={classes.playButton}
				>
					{isGameStarted ? 'Забрать' : 'Играть'}
				</IconButton>
			</Grid>
		</Grid>
	);
};

const useStyles = makeStyles({
	root: {},
	buttons: {
		display: 'flex',
		background: 'transparent',
		marginBottom: 25,
	},
	button: {
		background: 'rgba(0, 114, 114, 0.8)',
		borderRadius: 4,
		fontSize: 15,
		color: '#fff',
		padding: 5,
		marginRight: 6,
	},
	input: {
		width: 150,
		padding: '5px',
		color: '#fff',
		fontSize: 15,
		marginLeft: 10,
		background: 'rgba(0, 114, 114, 0.8)',
		border: '0.2px solid #00DDDD',
		borderRadius: 4,
	},
	playButton: {
		background: '#551c8b',
		boxShadow: '0px 0px 14px #b240f5',
		borderRadius: 10,
		padding: '7px 20px',
		fontWeight: 600,
		color: '#1effff',
	},
	'@media (min-width: 1100px)': {
		button: {
			fontSize: 20,
		},
		input: {
			fontSize: 20,
		},
	},
});
