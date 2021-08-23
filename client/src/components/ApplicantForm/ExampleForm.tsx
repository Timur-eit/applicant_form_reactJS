import React from 'react';
import ModalWindow from 'shared/ui/Modal';
// import TextInput from 'components/TextInput'
// import FileInput from 'components/FileInput'

// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string,
    surname: string,
    age: string,
    email: string,
    file: string
  };

interface IExampleFormProps {
    isOpenSubmitWindow: boolean,
    isOpenPolicyWindow: boolean,
    setOpenSubmitWindow: (state: boolean) => void,
    setOpenPolicyWindow: (state: boolean) => void,
}


function ExampleForm(props: IExampleFormProps) {
    const {
        isOpenSubmitWindow,
        isOpenPolicyWindow,
        setOpenSubmitWindow,
        setOpenPolicyWindow
    } = props;

//    const [isSubmitModalOpen, setSubmitModalOpen] = React.useState<boolean>(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful},
        // watch,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('Data sent ', data);
        // setSubmitModalOpen(true);
        setOpenSubmitWindow(true);
    }

    // const name = watch('name');
    // console.log('Name ' + name);
    // console.log(errors)

    // console.log(isSubmitModalOpen)

    React.useEffect(() => {
        if (isSubmitSuccessful) {
          reset();
        }
    }, [reset, isSubmitSuccessful]);    

    // React.useEffect(() => {
    //     if (isOpenSubmitWindow) {
    //         setTimeout(() => setOpenPolicyState(true), 100)
    //     }
    // }, [isOpenSubmitWindow]);

    return (
        <>
            {/* <button onClick={() => setOpenSubmitWindow()}>Change state</button> */}
            <form onSubmit={handleSubmit((data) =>onSubmit(data))}>
                <input type='text' {...register('name', {required: 'This field is required', maxLength: 10})} />
                {errors.name && <span>{errors.name.message}</span>}
                <hr />
                <input type='text' {...register('surname', {required: 'This field is required', maxLength: {value: 10, message: 'You exceeded max length'}})} />
                {errors.surname && <span>{errors.surname.message}</span>}
                <hr />
                <input type='email' {...register('email', {required: 'This field is required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'invalid email'}})} />
                {errors.email && <span>{errors.email.message}</span>}
                <hr />
                <input type='number' {...register('age', {valueAsNumber: true})} />
                <hr />
                {/* <input type='file' {...register('file')} /> */}
                {/* <hr /> */}
                {/* <Button variant="primary" type='submit'>Sent</Button> */}

                <button type='submit'>
                    Sent
                </button>
                {/* <div onClick={() => setSubmitModalOpen(false)}> */}
                    <ModalWindow
                        modalTitle={'Спасибо Егор!'}
                        declineButton={false}
                        modalText={'Мы скоро свяжемся с вами'}
                        closeButtonText={'Понятно'}
                        modalButtonVisible={false}
                        openState={isOpenSubmitWindow}
                        externalSetOpenState={setOpenSubmitWindow}
                        additionalStateHandler={setOpenPolicyWindow}
                    />

                    <ModalWindow
                        modalTitle={'Политика конфиденциальности'}
                        modalText={'Текст политики конфиденциальности ...'}
                        closeButtonText={'Я согласен'}
                        modalButtonVisible={false}
                        declineButton={true}
                        openState={isOpenPolicyWindow}
                        externalSetOpenState={setOpenPolicyWindow}
                        // additionalStateHandler={}
                        acceptAction={() => console.log('он согласен')}
                        declineAction={() => console.log('он НЕ согласен')}
                    />
                {/* </div> */}

            </form>
        </>
    );
}

export default ExampleForm;