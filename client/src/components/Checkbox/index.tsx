import {FieldAttributes, FormikTouched, FormikErrors} from "formik";

type FormikField = FieldAttributes<any>
interface ICheckboxProps {
    inputName: string,
    FormikConnectorTag: FormikField,
    generalLabelName?: string,
    required: boolean,
    checkboxData: Array<{
        labelName: string | React.ReactElement<string, string | React.JSXElementConstructor<any>>,
        value: string,
    }>
    touched?: FormikTouched<any>,
    errors?: FormikErrors<any>
}

function Checkbox(props: ICheckboxProps) {
    const {
        inputName,
        generalLabelName,
        checkboxData,
        required,
        FormikConnectorTag,
        touched,
        errors
    }= props;

    return (
        <label>
            {generalLabelName && generalLabelName}
            {checkboxData.map((input, i) => {
                return (
                    <label key={`${'input'}${'i'}`}>
                        {input.labelName}
                        <FormikConnectorTag
                            type='checkbox'
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

export default Checkbox;