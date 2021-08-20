import React from 'react'

interface ITextInputProps {
    labelName: string,
    typeValue: string,
    requiredValue: boolean,
    placeholderText: string,
    validationType?: any, 
}

const TextInput: React.FC<ITextInputProps> = (props) => {
    
    const {
        labelName,
        typeValue,
        requiredValue,
        placeholderText,
    } = props;
    
    
    return (
        <div>
            <label>
                {labelName}
                <input
                    type={typeValue}
                    required={requiredValue}
                    placeholder={placeholderText}
                />
            </label>
        </div>
    )
}

export default TextInput;