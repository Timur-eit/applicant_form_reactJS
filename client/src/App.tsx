import React from 'react';
import ModalWindow from 'shared/ui/Modal';
import Basic from 'components/ApplicantForm'
import TextInput from 'components/TextInput'
import FileInput from 'components/FileInput'


function App() {


    return (
        <>
            <ModalWindow
                openButtonTitle={'Modal'}
                modalTitle={'Спасибо Егор!'}
                modalText={'Мы скоро свяжемся с вами'}
                closeButtonText={'Понятно'}
            />
            <Basic />
            <TextInput
                labelName={'Name'}
                typeValue={'text'}
                requiredValue={true}
                placeholderText={'Name'}
            />
            <FileInput
                labelName={'Upload file'} 
            />
        </>
    );
}

export default App;
