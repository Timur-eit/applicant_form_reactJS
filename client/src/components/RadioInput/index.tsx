import {FieldAttributes, FormikTouched, FormikErrors} from "formik";

type FormikField = FieldAttributes<any>
interface IRadioInputProps {
    inputName: string,
    FormikConnectorTag: FormikField,
    generalLabelName: string,
    required: boolean,
    radioInputData: Array<{
        labelName: string | React.ReactElement<string>,
        value: string | boolean,
    }>
    touched?: FormikTouched<any>,
    errors?: FormikErrors<any>
}

function RadioInput(props: IRadioInputProps) {
    const {
        inputName,
        generalLabelName,
        radioInputData,
        required,
        FormikConnectorTag,
        touched,
        errors
    }= props;
    
    return (
        <label>
            {generalLabelName}
            {radioInputData.map((input, i) => {
                return (
                    <label key={`${input}${i}`}>
                        {input.labelName}
                        <FormikConnectorTag 
                            type='radio'
                            name={inputName}
                            value={input.value}
                        />
                    </label>
                )
            })}
            {required && (touched && touched[inputName]) &&
            (errors && errors[inputName]) &&
            <span>{errors[inputName]}</span>}
        </label>
    )
}

export default RadioInput;