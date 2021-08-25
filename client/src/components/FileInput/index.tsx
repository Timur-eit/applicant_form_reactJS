import React from 'react';
import {FormikTouched, FormikErrors} from "formik";
import './style.scss'

interface IFileInputProps {
    labelName: string | React.ReactElement<string, string | React.JSXElementConstructor<any>>,
    inputName: string,
    setFieldValue: (inputName: string, files: FileList | null) => void
    required: boolean,
    touched?: FormikTouched<any>,
    errors?: FormikErrors<any>
}

const FileInput: React.FC<IFileInputProps> = (props) => {

    const {
        labelName,
        inputName,
        setFieldValue,
        required,
        touched,
        errors
    } = props;


    return (
        <div className='file-input-container'>
            <label className='file-input-label'>
                <input
                    name={inputName}
                    type="file"
                    multiple={false}
                    onChange={(event: any) => {
                        const files: FileList | null = event.target.files;
                        setFieldValue(inputName, files);
                    }}
                />

                <div className='file-input-label__cross'></div>
                <p>{labelName}</p>
            </label>
            {required && (touched && touched[inputName]) &&
            (errors && errors[inputName]) &&
            <span>{errors[inputName]}</span>}
        </div>
    )
}

export default FileInput;

