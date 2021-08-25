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
    
    const [fileReady, setFileReady] = React.useState<boolean>(false);
    const [readyFileName, setReadyFileName] = React.useState<string | null>(null);
    
    const {
        labelName,
        inputName,
        setFieldValue,
        required,
        touched,
        errors
    } = props;

    const cancelFile = () => {
        setFileReady(false);
        setReadyFileName(null);
        setFieldValue(inputName, null)
    }


    return (
        <div className='file-input-container'>
            {!fileReady && <label className='file-input-label'>
                <input
                    name={inputName}
                    type="file"
                    multiple={false}
                    onChange={(event: any) => {
                        const files: FileList | null = event.target.files;
                        setFieldValue(inputName, files);
                        const fileName = files && files[0].name;                        
                        setFileReady(true)
                        setReadyFileName(fileName)
                    }}
                />
                <div className='file-input-label__cross'></div>
                <p>{labelName}</p>
            </label>}

            {fileReady && <div>
                <span>{readyFileName}</span>
                <button onClick={cancelFile}>Cancel</button>
            </div>}
            
            {required && (touched && touched[inputName]) &&
            (errors && errors[inputName]) &&
            <span>{errors[inputName]}</span>}
        </div>
    )
}

export default FileInput;

