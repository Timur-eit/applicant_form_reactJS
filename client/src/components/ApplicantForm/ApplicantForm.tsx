// import React from 'react';
import FileInput from 'components/FileInput';
import {Formik, Field, Form } from "formik";
import SubmitModal from 'components/SubmitModal';
import PrivatePolicyModal from 'components/PrivacyPolicyModal';
import validate from './validation/validation';
import TextInput from 'components/TextInput'
import RadioInput from 'components/RadioInput';
import Checkbox from 'components/Checkbox';
import { formName, formBlocks, inputDefaultValues } from './formData';

import {acceptPrivacyPolicy, declinePrivacyPolicy} from 'shared/utils'
import './style.scss';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


interface IApplicantFormProps {
    isOpenSubmitWindow: boolean,
    isOpenPolicyWindow: boolean,
    setOpenSubmitWindow: (state: boolean) => void,
    setOpenPolicyWindow: (state: boolean) => void,
    checkedValues: string[],
    setCheckedValues: (value: string) => void,
    isSubmitAvailable: boolean,
    setSubmitAvailable: (state: boolean) => void,
    userName: string | null,
    formDataHandler: (formValues: any) => void,
}

function ApplicantForm(props: IApplicantFormProps) {
    const {
        isOpenSubmitWindow,
        isOpenPolicyWindow,
        setOpenSubmitWindow,
        setOpenPolicyWindow,
        checkedValues,
        setCheckedValues,
        isSubmitAvailable,
        setSubmitAvailable,
        userName,
        formDataHandler,
    } = props;

    return (
        <div className='form-container'>
            
            <h1>{formName}</h1>
            <Formik
                initialValues={inputDefaultValues}
                onSubmit={(values, {resetForm}) => {
                    formDataHandler(values)
                    setOpenSubmitWindow(true)
                    resetForm()
                }}
                validate={(values) => validate(values, setSubmitAvailable)}
            >
                {
                    ({setFieldValue, errors, touched}) => <Form>

                        <div className='private-data'>
                            <h2>{formBlocks.privateData.title}</h2>
                            
                            <div className='private-data__fields'>                            
                            
                            {formBlocks.privateData.inputs.map((input, i) => {
                                 if (input.type === 'file') {
                                    return (
                                        <div key={`${input}_${i}`}>
                                            <FileInput
                                                labelName={input.label}
                                                inputName={input.name}
                                                setFieldValue={setFieldValue}
                                                required={true}
                                                errors={errors}
                                            />
                                        </div>
                                    )
                                } else if (input.type === 'radio') {
                                    return (
                                        <div key={`${input}_${i}`}>
                                            <RadioInput
                                                inputName={input.name}
                                                generalLabelName={input.label}
                                                FormikConnectorTag={Field}
                                                required={input.required}
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
                                                inputPlaceholder={input.placeholder}
                                                labelName={input.label}
                                                required={input.required}
                                                touched={touched}
                                                errors={errors}
                                            />
                                        </div>
                                    )
                                }
                            })}
                            </div>
                        </div>

                        <div className='github-link'>
                            <h2>{formBlocks.gitHubSection.title}</h2>
                            {formBlocks.gitHubSection.inputs.map((input, i) => {
                                return (
                                    <div key={`${input}_${i}`}>
                                        <TextInput
                                            FormikConnectorTag={Field}
                                            inputName={input.name}
                                            labelName={input.label}
                                            inputPlaceholder={input.placeholder}
                                            required={input.required}
                                            touched={touched}
                                            errors={errors}
                                        />
                                    </div>
                                )
                            })}
                        </div>

                        <div className='privacy-policy'>
                            <h2>{formBlocks.privacyPolicyCheck.title}</h2>
                            {formBlocks.privacyPolicyCheck.inputs.map((input, i) => {
                                return (
                                    <div key={`${input}_${i}`}>
                                        <Checkbox
                                            inputName={input.name}
                                            FormikConnectorTag={Field}
                                            required={input.required}
                                            touched={touched}
                                            errors={errors}
                                            checkboxData={input.options ? input.options: []}
                                            externalAction={setOpenPolicyWindow}
                                            isChecked={checkedValues}
                                            setChecked={setCheckedValues}
                                            setFieldValue={setFieldValue}
                                        />
                                    </div>

                                )
                            })}
                        </div>

                        <Button className='submit-button' type='submit' disabled={!isSubmitAvailable}>
                            Отправить
                        </Button>


                        <SubmitModal
                            userName={userName && userName}
                            openState={isOpenSubmitWindow}
                            setOpenState={setOpenSubmitWindow}
                        />
                        <PrivatePolicyModal
                            openState={isOpenPolicyWindow}
                            setOpenState={setOpenPolicyWindow}
                            acceptAction={() => {
                                acceptPrivacyPolicy( // * to set checkbox value remotely
                                    'privacyPolicy',
                                    'agree',
                                    checkedValues,
                                    setCheckedValues,
                                    setFieldValue
                                );
                            }}
                            declineAction={() => {
                                declinePrivacyPolicy( // * to set checkbox value remotely
                                    'privacyPolicy',
                                    'agree',
                                    checkedValues,
                                    setCheckedValues,
                                    setFieldValue
                                );
                            }}
                        />
                    </Form>
                }
            </Formik>
        </div>
    );
}

export default ApplicantForm;