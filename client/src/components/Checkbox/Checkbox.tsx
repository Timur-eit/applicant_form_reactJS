import React from "react";
import {FieldAttributes, FormikTouched, FormikErrors} from "formik";
import './style.scss'

type FormikField = FieldAttributes<any>
interface ICheckboxProps {
    inputName: string,
    FormikConnectorTag: FormikField,
    generalLabelName?: string,
    required: boolean,
    checkboxData: Array<{
        labelName: string | React.ReactElement<string, string | React.JSXElementConstructor<any>>,
        link?: string | React.ReactElement<string, string | React.JSXElementConstructor<any>>,
        value: string,
    }>
    touched?: FormikTouched<any>,
    errors?: FormikErrors<any>
    externalAction?: (state: boolean) => void

    isChecked?: any,
    setChecked?: any,
}

function Checkbox(props: ICheckboxProps) {
    const {
        inputName,
        generalLabelName,
        checkboxData,
        required,
        FormikConnectorTag,
        touched,
        errors,
        externalAction,

        isChecked,
        setChecked,
    }= props;

    return (
        <div>
            {generalLabelName && generalLabelName}
            {checkboxData.map((input, i) => {
                return (
                    <div key={`${input}${i}`} className='checkbox'>
                        <p>{input.labelName}{input.link && <span onClick={() => {
                            externalAction && externalAction(true);
                        }}>{input.link}</span>}</p>
                        <FormikConnectorTag
                            type='checkbox'
                            // id={input.value}
                            name={inputName}
                            value={input.value}
                            checked={isChecked.includes(input.value)}
                            onClick={() => setChecked(input.value)}
                        />
                    </div>
                )
            })}
            {required && (touched && touched[inputName]) &&
            (errors && errors[inputName]) &&
            <span>{errors[inputName]}</span>}
        </div>
    )
}

export default Checkbox;