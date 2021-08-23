import React from 'react';
import './style.scss'

interface IFileInputProps {
    labelName: string,
    inputName: string,
    params?: any
}

const FileInput: React.FC<IFileInputProps> = ({labelName, inputName, params}) => {
    return (
        <div className='file-input-container'>            
            <label className='file-input-label' htmlFor="request-file-upload">
                <input id="request-file-upload" name={inputName} type="file" {...params}/>
                <div className='file-input-label__cross'></div>
                <p>{labelName}</p>            
            </label>
        </div>
    )
}

export default FileInput;


