import React from "react";
import { FormikTouched, FormikErrors } from "formik";
import "./style.scss";
import fileReadyImg from "./img/file_ready.svg";
import fileErrorImg from "./img/file_error.svg";
import classNames from "classnames";

interface IFileInputProps {
  labelName:
    | string
    | React.ReactElement<string, string | React.JSXElementConstructor<any>>;
  inputName: string;
  setFieldValue: (inputName: string, files: FileList | null) => void;
  required: boolean;
  touched?: FormikTouched<any>;
  errors?: FormikErrors<any>;
}

const FileInput: React.FC<IFileInputProps> = (props) => {
  const [fileReady, setFileReady] = React.useState<boolean>(false);
  const [readyFileName, setReadyFileName] = React.useState<string | null>(null);

  const { labelName, inputName, setFieldValue, required, errors } = props;

  const cancelFile = () => {
    setFileReady(false);
    setReadyFileName(null);
    setFieldValue(inputName, null);
  };

  const isError = (): boolean => {
    return errors && errors[inputName] ? true : false;
  };

  const fileReadyClasses = classNames({
    "file-ready": true,
    "file-ready--error": isError(),
  });

  return (
    <div className="file-container">
      {!fileReady && (
        <label className="file-label">
          <input
            name={inputName}
            type="file"
            multiple={false}
            onChange={(event: any) => {
              const files: FileList | null = event.target.files;
              setFieldValue(inputName, files);
              const fileName = files && files[0].name;
              setFileReady(true);
              setReadyFileName(fileName);
            }}
          />
          <div className="file-label__cross"></div>
          <p>{labelName}</p>
        </label>
      )}

      {required && isError() && (
        <p className="error-message">{errors && errors[inputName]}</p>
      )}

      {fileReady && (
        <div className={fileReadyClasses} onClick={cancelFile}>
          <img
            src={!isError() ? fileReadyImg : fileErrorImg}
            alt={"file uploaded to browser"}
          />
          <span>{readyFileName}</span>
          <div className="deactivate-btn"></div>
        </div>
      )}
    </div>
  );
};

export default FileInput;
