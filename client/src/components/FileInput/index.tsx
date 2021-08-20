import React from 'react';
import './style.scss'

interface IFileInputProps {
    labelName: string,
}

const FileInput: React.FC<IFileInputProps> = ({labelName}) => {
    return (
        <div className='file-input-container'>            
            <label className='file-input-label' htmlFor="request-file-upload">
                <input id="request-file-upload" name="request-file" type="file"/>
                <div className='file-input-label__cross'></div>
                <p>{labelName}</p>            
            </label>
        </div>
    )
}

export default FileInput;


