import React from "react";
import {FieldAttributes, FormikTouched, FormikErrors} from "formik";

type FormikField = FieldAttributes<any>
interface ITextInputProps {
    inputName: string,
    labelName: string | React.ReactElement<string, string | React.JSXElementConstructor<any>>,
    FormikConnectorTag: FormikField,
    touched: FormikTouched<any>,
    errors: FormikErrors<any>
}

function TextInput(props: ITextInputProps) {
    const {inputName, labelName, FormikConnectorTag, touched, errors} = props;
    return (
        <label>
            {labelName}
            <FormikConnectorTag name={inputName} />
            {touched[inputName] && errors[inputName] && <span>{errors[inputName]}</span>}
        </label>
    )
}

export default TextInput;