import React, {useState} from 'react';

import ButtonInput from '../../../Common/inputs/Button';
import Modal from '@mui/material/Modal';

import AuthModuleBody from 'components/Header/components/AuthModuleBody';


const UnregisterLoginComponent = () => {
    
    const [ isAuthModuleOpen, setIsAuthModuleOpen ] = useState(false);
    const handleClick = () => {
        setIsAuthModuleOpen(true);
    }

    return (
        <>
            {/* <ButtonInput 
                variant="outlined" 
                value="Хочу новый акк."
                onClick={ () => setIsOpenRegisterModal(true) }
            /> */}
            <ButtonInput 
                variant="outlined" 
                value="Сюда.."
                onClick={ handleClick }
                stylesProps={{
                    width: "220px"
                }}
            />
            <Modal
                open={isAuthModuleOpen}
                onClick={() => setIsAuthModuleOpen(false)}
            >
                <AuthModuleBody />
            </Modal>
        </>
    );
}

export default UnregisterLoginComponent;
