import React from 'react';
import ModalWindow from 'shared/ui/Modal';
import FileInput from 'components/FileInput';
import { useForm, SubmitHandler} from 'react-hook-form';

type Inputs = {
    firstName: string,
    lastName: string,
    email: string,
    file: FileList,
    gender: string,
  };

interface IExampleFormProps {
    isOpenSubmitWindow: boolean,
    isOpenPolicyWindow: boolean,
    setOpenSubmitWindow: (state: boolean) => void,
    setOpenPolicyWindow: (state: boolean) => void,
}

interface FileList {
    [Symbol.iterator](): IterableIterator<File>;
}


function ExampleForm(props: IExampleFormProps) {
    
    // const defaultFileList: FileList = {
    //     [Symbol()]: new File([], '')
    // }

    const {
        isOpenSubmitWindow,
        isOpenPolicyWindow,
        setOpenSubmitWindow,
        setOpenPolicyWindow
    } = props;

// const defaultValues: Inputs = React.useMemo(() => {
//     return {
//         firstName: '',
//         lastName: '',
//         email: '',
//         file: new File([], ''),
//         gender: ''
//     }
// }, [])

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful},
        // watch,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('Data sent ', data);
        setOpenSubmitWindow(true);
    }


    React.useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }
    }, [reset, isSubmitSuccessful]);


    return (
        <>
            <form onSubmit={handleSubmit((data) =>onSubmit(data))}>

                <label>
                    Имя
                    <input type='text' {...register('firstName', {required: 'This field is required', maxLength: 10})} />
                    {errors.firstName && <span>{errors.firstName.message}</span>}
                </label>

                <label>
                    Фамилия
                    <input type='text' {...register('lastName', {required: 'This field is required', maxLength: {value: 10, message: 'You exceeded max length'}})} />
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                </label>

                <label>
                    Электронная почта
                    <input type='email' {...register('email', {required: 'This field is required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'invalid email'}})} />
                    {errors.email && <span>{errors.email.message}</span>}
                </label>


                {/* <input type='file' {...register('file')} /> */}
                <FileInput
                    labelName={'Загрузить резюме'}
                    inputName={'file'}
                    params={register('file')}
                />

                <label>
                    male
                    <input type='radio' {...register('gender', {required: 'This field is required'})} value='male' />
                </label>

                <label>
                    female
                    <input type='radio' {...register('gender', {required: 'This field is required'})} value='female' />
                </label>


                {errors.gender && <span>{errors.gender.message}</span>}
                <hr />

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
                        acceptAction={() => console.log('он согласен')}
                        declineAction={() => console.log('он НЕ согласен')}
                    />
                {/* </div> */}

            </form>
        </>
    );
}

export default ExampleForm;