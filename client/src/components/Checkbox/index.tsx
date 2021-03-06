import React from "react";
import { FieldAttributes, FormikTouched, FormikErrors } from "formik";
import "./style.scss";

type FormikField = FieldAttributes<any>;
interface ICheckboxProps {
  inputName: string;
  FormikConnectorTag: FormikField;
  generalLabelName?: string;
  required: boolean;
  checkboxData: Array<{
    labelName:
      | string
      | React.ReactElement<string, string | React.JSXElementConstructor<any>>;
    link?:
      | string
      | React.ReactElement<string, string | React.JSXElementConstructor<any>>;
    value: string;
  }>;
  touched?: FormikTouched<any>;
  errors?: FormikErrors<any>;
  externalAction?: (state: boolean) => void;
  isChecked: string[];
  setChecked: (value: string) => void;
  isDataSubmitted?: boolean;
}

// const inputValues: string[] = [];

function Checkbox(props: ICheckboxProps) {
  const {
    inputName,
    generalLabelName,
    checkboxData,
    required,
    FormikConnectorTag,
    touched,
    errors,
    externalAction,
    isChecked,
    setChecked,
    isDataSubmitted,
  } = props;

  React.useEffect(() => {
    if (isDataSubmitted) {
      setChecked("agree");
    }
  }, [isDataSubmitted]);
  // это костыль, sorry - баг вылез уже перед отправкой задания на проверку

  return (
    <div className="checkbox-container">
      <h2>{generalLabelName && generalLabelName}</h2>

      <p className="error-message">
        {required &&
          touched &&
          touched[inputName] &&
          errors &&
          errors[inputName] && <span>{errors[inputName]}</span>}
      </p>

      {checkboxData.map((input, i) => {
        return (
          <div key={`${input}${i}`} className="checkbox">
            <FormikConnectorTag
              type="checkbox"
              name={inputName}
              value={input.value}
              checked={isChecked.includes(input.value)}
              onClick={() => setChecked(input.value)}
            />
            <p className="label-name">
              {input.labelName}
              {input.link && (
                <span
                  onClick={() => {
                    externalAction && externalAction(true);
                  }}
                >
                  {input.link}
                </span>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Checkbox;
