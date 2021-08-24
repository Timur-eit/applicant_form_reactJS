import React, { Fragment } from 'react';
import FileInput from 'components/FileInput';
import {Formik, Field, Form } from "formik";
import SubmitModal from 'components/SubmitModal';
import PrivatePolicyModal from 'components/PrivacyPolicyModal';
import validate from './validation';

import TextInput from 'components/TextInput'
import RadioInput from 'components/RadioInput'

import { formBlocks } from './formData';

// const inputs  = formBlocks.privateData.inputs;
// const defaultInputValues = inputs.reduce((prev: any, curr) => {
//     if (curr.name !in prev) {
//         prev[curr.name] = curr.defaultValue
//     }
//     return prev;
// }, {})

export interface Inputs {
    firstName: string,
    lastName: string,
    email: string,
    file: FileList | null,
    gender: string,
    // isConfirm: boolean
}

interface IApplicantFormProps {
    isOpenSubmitWindow: boolean,
    isOpenPolicyWindow: boolean,
    setOpenSubmitWindow: (state: boolean) => void,
    setOpenPolicyWindow: (state: boolean) => void,
}

function ApplicantForm(props: IApplicantFormProps) {
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
        <Fragment>

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
                    {/* <label>
                        Имя
                        <Field name="firstName" />
                        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                    </label> */}

                    <TextInput
                        FormikConnectorTag={Field}
                        inputName={'firstName'}
                        labelName={'Имя'}
                        touched={touched}
                        errors={errors}
                    />

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

                    {/* <label>
                        male
                        <Field type='radio' name='gender' value="male"/>
                    </label>
                    <label>
                        female
                        <Field type='radio' name='gender' value="female" />
                    </label>
                    {touched.gender && errors.gender && <span>{errors.gender}</span>} */}
                    <RadioInput
                        inputName='gender'
                        FormikConnectorTag={Field}
                        radioInputData={[
                            {labelName: 'Мужчина', value: 'male'},
                            {labelName: 'Женщина', value: 'female'}
                        ]}
                        touched={touched}
                        errors={errors}
                    />

                    <button type='submit'>
                        Sent
                    </button>


                </Form>
            }

        </Formik>



                    <SubmitModal
                        userName={'NAME'}
                        openState={isOpenSubmitWindow}
                        setOpenState={setOpenSubmitWindow}
                        additionalStateHandler={setOpenPolicyWindow}
                    />
                    <PrivatePolicyModal
                        openState={isOpenPolicyWindow}
                        setOpenState={setOpenPolicyWindow}
                        acceptAction={() => console.log('он согласен')}
                        declineAction={() => console.log('он НЕ согласен')}
                    />

        </Fragment>
    );
}

export default ApplicantForm;