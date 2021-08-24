import {FieldAttributes, FormikTouched, FormikErrors} from "formik";

type FormikField = FieldAttributes<any>
interface IRadioInputProps {
    inputName: string,
    FormikConnectorTag: FormikField,
    radioInputData: Array<{
        labelName: string,
        value: string,
    }>
    touched: FormikTouched<any>,
    errors: FormikErrors<any>
}

function RadioInput(props: IRadioInputProps) {
    const {inputName, radioInputData, FormikConnectorTag, touched, errors} = props;
    return (
        <>
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
            {touched[inputName] && errors[inputName] && <span>{errors[inputName]}</span>}
        </>
    )
}

export default RadioInput;