import React from "react";
import {FieldAttributes, FormikTouched, FormikErrors} from "formik";
import './style.scss';

type FormikField = FieldAttributes<any>
interface IRadioInputProps {
    inputName: string,
    FormikConnectorTag: FormikField,
    generalLabelName: string | React.ReactElement<string, string | React.JSXElementConstructor<any>>,
    required: boolean,
    radioInputData: Array<{
        labelName: string | React.ReactElement<string>,
        value: string | boolean,
    }>
    touched?: FormikTouched<any>,
    errors?: FormikErrors<any>
}

function RadioInput(props: IRadioInputProps) {
    const {
        inputName,
        generalLabelName,
        radioInputData,
        required,
        FormikConnectorTag,
        touched,
        errors
    }= props;
    
    return (
        <label className='radio-btn-container'>
            <div className='label-name'>
                <h2>{generalLabelName}</h2>
                {required && (touched && touched[inputName]) &&
                (errors && errors[inputName]) &&
                <p className='error-message'>{errors[inputName]}</p>}
            </div>
            {radioInputData.map((input, i) => {
                return (
                    <label className='radio-btn' key={`${input}${i}`}>
                        {input.labelName}
                        <FormikConnectorTag 
                            type='radio'
                            name={inputName}
                            value={input.value}
                        />
                    </label>
                )
            })}            
        </label>
    )
}

export default RadioInput;