import React from 'react';
import ModalWindow from 'shared/ui/Modal';
import FileInput from 'components/FileInput';
import {Formik, Field, Form } from "formik";

interface Inputs {
    firstName: string,
    lastName: string,
    email: string,
    file: FileList | null,
    gender: string,
    isConfirm: boolean
}

interface IExampleFormProps {
    isOpenSubmitWindow: boolean,
    isOpenPolicyWindow: boolean,
    setOpenSubmitWindow: (state: boolean) => void,
    setOpenPolicyWindow: (state: boolean) => void,
}

interface IError {
    [field : string] : string
}

const validate = (values: Inputs): IError => {
    const error: IError = {};
    if(!values.firstName) {
        error.firstName = 'firstName is required';
    }
    if(!values.lastName) {
        error.lastName = 'lastName is required';
    }
    if (!values.email) {
        error.email = 'email is required';
    } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))) {
        error.email = "email don't match";
    }
    return error;
}

function ExampleForm(props: IExampleFormProps) {

    const {
        isOpenSubmitWindow,
        isOpenPolicyWindow,
        setOpenSubmitWindow,
        setOpenPolicyWindow
    } = props;

    const defaultValues: Inputs = React.useMemo(() => {
        return {
            firstName: '',
            lastName: '',
            email: '',
            file: null,
            gender: '',
            isConfirm: false
        }
    }, [])

    return (
        <Formik
            initialValues={defaultValues}
            onSubmit={(values: Inputs, {resetForm}) => {
                console.log(values)
                setOpenSubmitWindow(true)
                resetForm()
            }}
            validate={validate}
        >
            {
                ({setFieldValue, errors, touched}) => <Form>
                    <label>
                        Имя
                        <Field name="firstName" />
                        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                    </label>

                    <label>
                        Фамилия
                        <Field name="lastName" />
                        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                    </label>

                    <label>
                        Электронная почта
                        <Field type='email' name="email"/>
                        {touched.email && errors.email && <span>{errors.email}</span>}
                    </label>

                    <FileInput
                        labelName={'Загрузить резюме'}
                        inputName={'file'}
                        setFieldValue={setFieldValue}
                    />

                    <label>
                        male
                        <Field type='radio' name='gender' value="male"/>
                    </label>
                    <label>
                        female
                        <Field type='radio' name='gender' value="female" />
                    </label>
                    {touched.gender && errors.gender && <span>{errors.gender}</span>}


                    <button type='submit'>
                        Sent
                    </button>
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
                </Form>
            }

        </Formik>
    );
}

export default ExampleForm;