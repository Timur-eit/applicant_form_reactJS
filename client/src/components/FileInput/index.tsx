import React from 'react';
import './style.scss'

interface IFileInputProps {
    labelName: string,
    inputName: string,
    setFieldValue: (inputName: string, files: FileList | null) => void
}

const FileInput: React.FC<IFileInputProps> = ({labelName, inputName, setFieldValue}) => {
    return (
        <div className='file-input-container'>
            <label className='file-input-label'>
                <input
                    name={inputName}
                    type="file"
                    multiple={false}
                    onChange={(event) => {
                        const files: FileList | null = event.target.files;
                        setFieldValue("file", files);
                    }}
                />
                <div className='file-input-label__cross'></div>
                <p>{labelName}</p>
            </label>
        </div>
    )
}

export default FileInput;

