import React from "react";
import {FieldAttributes, FormikTouched, FormikErrors} from "formik";

type FormikField = FieldAttributes<any>
interface ITextInputProps {
    inputName: string,
    labelName: string | React.ReactElement<string, string | React.JSXElementConstructor<any>>,
    required: boolean,
    FormikConnectorTag: FormikField,
    touched?: FormikTouched<any>,
    errors?: FormikErrors<any>
}

function TextInput(props: ITextInputProps) {
    const {
        inputName,
        labelName,
        required,
        FormikConnectorTag,
        touched,
        errors
    } = props;

    return (
        <label>
            {labelName}
            <FormikConnectorTag name={inputName} />
            {required && (touched && touched[inputName]) && 
            (errors && errors[inputName]) &&
            <span>{errors[inputName]}</span>}
        </label>
    )
}

export default TextInput;