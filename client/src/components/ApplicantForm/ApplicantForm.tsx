import React, { Fragment } from 'react';
import FileInput from 'components/FileInput';
import {Formik, Field, Form } from "formik";
import SubmitModal from 'components/SubmitModal';
import PrivatePolicyModal from 'components/PrivacyPolicyModal';
import validate from './validation';

import TextInput from 'components/TextInput'
import RadioInput from 'components/RadioInput'

import { formBlocks } from './formData';

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
                    <div className='private-data'>
                        {formBlocks.privateData.inputs.map((input, i) => {                            
                             if (input.type === 'file') {
                                return (
                                    <div key={`${input}_${i}`}>
                                        <FileInput
                                            labelName={input.label}
                                            inputName={input.name}
                                            setFieldValue={setFieldValue}                                            
                                            touched={touched}
                                            errors={errors}
                                        />
                                    </div>
                                )
                            } else if (input.type === 'radio') {
                                return (
                                    <div key={`${input}_${i}`}>
                                        <RadioInput
                                            inputName={input.name}
                                            generalLabelName={input.name}
                                            FormikConnectorTag={Field}
                                            radioInputData={input.options ? input.options: []}
                                            touched={touched}
                                            errors={errors}
                                        />
                                    </div>
                                )
                            } else {                                
                                return (
                                    <div key={`${input}_${i}`}>
                                        <TextInput
                                            FormikConnectorTag={Field}
                                            inputName={input.name}
                                            labelName={input.label}
                                            touched={touched}
                                            errors={errors}
                                        />
                                    </div>
                                )
                            }
                        })}
                    </div>


{/* 
                    <TextInput
                        FormikConnectorTag={Field}
                        inputName={'firstName'}
                        labelName={'Имя'}
                        touched={touched}
                        errors={errors}
                    /> */}

                    {/* <label>
                        Фамилия
                        <Field name="lastName" />
                        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                    </label> */}

                    {/* <label>
                        Электронная почта
                        <Field type='email' name="email"/>
                        {touched.email && errors.email && <span>{errors.email}</span>}
                    </label> */}

                    {/* <FileInput
                        labelName={'Загрузить резюме'}
                        inputName={'file'}
                        setFieldValue={setFieldValue}
                    /> */}

                    {/* <label>
                        male
                        <Field type='radio' name='gender' value="male"/>
                    </label>
                    <label>
                        female
                        <Field type='radio' name='gender' value="female" />
                    </label>
                    {touched.gender && errors.gender && <span>{errors.gender}</span>} */}
                    {/* <RadioInput
                        inputName='gender'
                        FormikConnectorTag={Field}
                        generalLabelName={'Пол'}
                        radioInputData={[
                            {labelName: 'Мужчина', value: 'male'},
                            {labelName: 'Женщина', value: 'female'}
                        ]}
                        touched={touched}
                        errors={errors}
                    /> */}

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