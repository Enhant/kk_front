import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { ChangeEvent } from 'react';
import gemIcon from '@assets/icons/gem.svg';


type Props = {
	bet: number;
	setBet(betValue: number): void;
	isGameStarted: boolean;
};

function CustomizedInputBase({
	bet,
	setBet,
	isGameStarted,
}: Props) {
	const classes = useStyles();

	const handleMinBtnClick = () => {
		setBet(1);
	};

	const handleDivideBtnClick = () => {
		setBet(bet / 2);
	};

	const handleMultiplyBtnClick = () => {
		setBet(bet * 2);
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const betValue: number = parseFloat(event.currentTarget.value);

		if (!isNaN(betValue)) {
			setBet(betValue);
		}
	};

	return (
		<Paper component="form" className={classes.root}>
			<IconButton className={classes.iconButton} aria-label="menu">
				<img src={gemIcon} />
			</IconButton>
			<InputBase
				disabled={isGameStarted}
				onChange={handleInputChange}
				className={classes.input}
				inputProps={{ 'aria-label': 'bet' }}
				value={bet}
			/>
			<IconButton
				disabled={isGameStarted}
				onClick={handleMinBtnClick}
				className={classes.button}
			>
				min
			</IconButton>
			<IconButton
				disabled={isGameStarted}
				onClick={handleDivideBtnClick}
				className={classes.button}
			>
				1/2
			</IconButton>
			<IconButton
				disabled={isGameStarted}
				onClick={handleMultiplyBtnClick}
				className={classes.button}
			>
				2x
			</IconButton>
		</Paper>
	);
}

const useStyles = makeStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		background: 'transparent',
		border: '1px solid rgba(255,255,255,0.5)',
		borderRadius: 10,
		boxShadow: 'none',
		marginBottom: 18,
	},
	input: {
		flex: 1,
		color: 'white',
		fontSize: 24,
		fontWeight: 200,
		padding: '0 8px',
	},
	iconButton: {
		padding: '3px 8px',
		'& > img': {
			width: 22,
			height: 19,
		},
	},
	divider: {
		height: 28,
		margin: 4,
	},
	button: {
		padding: '4px 10px',
		borderRadius: 1,
		background: '#007272',
		color: '#fff',
		fontSize: 12,
		marginRight: 3,
		'&:last-child': {
			marginRight: 7,
		},
	},
	'@media (min-width: 1100px)': {
		button: {
			fontSize: 16,
		},
	},
});

export default CustomizedInputBase