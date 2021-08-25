import React from "react";
import {FieldAttributes, FormikTouched, FormikErrors} from "formik";

type FormikField = FieldAttributes<any>
interface ITextInputProps {
    inputName: string,
    labelName: string | React.ReactElement<string, string | React.JSXElementConstructor<any>>,
    required: boolean,
    inputPlaceholder?: string,
    FormikConnectorTag: FormikField,
    touched?: FormikTouched<any>,
    errors?: FormikErrors<any>
}

function TextInput(props: ITextInputProps) {
    const {
        inputName,
        labelName,
        inputPlaceholder,
        required,
        FormikConnectorTag,
        touched,
        errors
    } = props;    

    return (
        <label>
            {labelName}
            <FormikConnectorTag name={inputName} placeholder={inputPlaceholder} />
            {required && (touched && touched[inputName]) &&
            (errors && errors[inputName]) &&
            <span>{errors[inputName]}</span>}
        </label>
    )
}

export default TextInput;