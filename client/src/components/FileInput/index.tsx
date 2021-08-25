import React from 'react';
import {FormikTouched, FormikErrors} from "formik";
import './style.scss'
import fileReadyImg from './img/file_ready.svg'

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
        errors
    } = props;

    const cancelFile = () => {
        setFileReady(false);
        setReadyFileName(null);
        setFieldValue(inputName, null)
    }


    return (
        <div className='file-container'>
            {!fileReady && <label className='file-label'>
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
                <div className='file-label__cross'></div>
                <p>{labelName}</p>
            </label>}

            {fileReady && <div className='file-ready'>
                <img src={fileReadyImg} alt={'file uploaded to browser'} />
                <span>{readyFileName}</span>
                <div className='deactivate-btn' onClick={cancelFile}></div>
            </div>}

            {required && (errors && errors[inputName]) &&
            <span>{errors[inputName]}</span>}
        </div>
    )
}

export default FileInput;

