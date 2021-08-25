import React, { Fragment } from 'react';
import FileInput from 'components/FileInput';
import {Formik, Field, Form } from "formik";
import SubmitModal from 'components/SubmitModal';
import PrivatePolicyModal from 'components/PrivacyPolicyModal';
import validate from './validation';
import TextInput from 'components/TextInput'
import RadioInput from 'components/RadioInput';
import Checkbox from 'components/Checkbox';
import { formBlocks, inputDefaultValues } from './formData';
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

    return (
        <Fragment>
            <Formik
                initialValues={inputDefaultValues}
                onSubmit={(values, {resetForm}) => {
                    console.log(values)
                    setOpenSubmitWindow(true)
                    resetForm()
                }}
                validate={validate}
            >
                {
                    ({setFieldValue, errors, touched}) => <Form>

                        <div className='private-data'>
                            <h2>{formBlocks.privateData.title}</h2>
                            {formBlocks.privateData.inputs.map((input, i) => {
                                 if (input.type === 'file') {
                                    return (
                                        <div key={`${input}_${i}`}>
                                            <FileInput
                                                labelName={input.label}
                                                inputName={input.name}
                                                setFieldValue={setFieldValue}
                                                required={input.required}
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

                        <div className='github-link'>
                            <h2>{formBlocks.gitHubSection.title}</h2>
                            {formBlocks.gitHubSection.inputs.map((input, i) => {
                                return (
                                    <div key={`${input}_${i}`}>
                                        <TextInput
                                            FormikConnectorTag={Field}
                                            inputName={input.name}
                                            labelName={input.label}
                                            required={input.required}
                                            touched={touched}
                                            errors={errors}
                                        />
                                    </div>
                                )
                            })}
                        </div>

                        <div className='github-link'>
                            <h2>{formBlocks.privacyPolicyCheck.title}</h2>
                            {formBlocks.privacyPolicyCheck.inputs.map((input, i) => {
                                return (
                                    <div key={`${input}_${i}`}>
                                        <Checkbox
                                            inputName={input.name}
                                            FormikConnectorTag={Field}
                                            required={true}
                                            // checkboxData={input.options ? input.options: []}
                                            checkboxData={[{
                                                labelName: 'Agree',
                                                value: 'true',
                                            }]}
                                        />
                                    </div>

                                )
                            })}
                        </div>
                        
                        <Checkbox
                            inputName={'CHECK'}
                            FormikConnectorTag={Field}
                            required={true}
                            // checkboxData={input.options ? input.options: []}
                            checkboxData={[{
                                labelName: 'Agree',
                                value: 'true',
                            }]}
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