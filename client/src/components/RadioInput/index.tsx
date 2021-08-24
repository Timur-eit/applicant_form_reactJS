import {FieldAttributes, FormikTouched, FormikErrors} from "formik";

type FormikField = FieldAttributes<any>
interface IRadioInputProps {
    inputName: string,
    FormikConnectorTag: FormikField,
    generalLabelName: string,
    radioInputData: Array<{
        labelName: string,
        value: string,
    }>
    touched?: FormikTouched<any>,
    errors?: FormikErrors<any>
}

function RadioInput(props: IRadioInputProps) {
    const {inputName, generalLabelName, radioInputData, FormikConnectorTag, touched, errors} = props;
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
            {(touched && touched[inputName]) &&
            (errors && errors[inputName]) &&
            <span>{errors[inputName]}</span>}
        </label>
    )
}

export default RadioInput;