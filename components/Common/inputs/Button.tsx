import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

import theme from 'themeStore';


type TSize = number | string;

const useStyles = makeStyles<null, {width?: TSize, height?: TSize}>({
    button: (props) => ({
        border: 0,
        width: props?.width || 152,
        height: props?.height || 44,
        borderRadius: 15,
        padding: '15px 30px',
        marginRight: 10,
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 1,
        color: '#1EFFFF',
        textTransform: 'none',
        background: theme.palette.primary.main,
        boxShadow: `0 0 5px ${theme.palette.primary.main}, 
            0 0 5px ${theme.palette.primary.main},
            0 0 10px ${theme.palette.primary.main}`,
        "&:hover": {
            background: 'rgba(85, 28, 139, 0.8)',
        }
    })
})

interface IProps {
    value: string;
    variant?: "text" | "outlined" | "contained" | undefined;
    stylesProps?: {
        width?: TSize,
        height?: TSize
    }
    onClick?: () => void;
}

const ButtonInput: React.FC<IProps> = ({value, variant, stylesProps, onClick}) => {
    const classes = useStyles(stylesProps || {});

    return (
        <Button 
            variant={variant}
            className={ classes.button }
            onClick={onClick}
        >
            {value}
        </Button>
    )
}

export default ButtonInput;