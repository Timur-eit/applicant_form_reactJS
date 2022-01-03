import errorMessages from "./errorMessages";

const MAX_FILE_SIZE = 16777216;

interface IError {
  [field: string]: string | undefined;
}

function validate(
  values: any,
  unblockSubmit?: (state: boolean) => void
): IError {
  const error: IError = {};
  if (!values.firstName) {
    error.firstName = errorMessages.firstName.required;
  }
  if (!values.lastName) {
    error.lastName = errorMessages.lastName.required;
  }
  if (!values.email) {
    error.email = errorMessages.email.required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    error.email = errorMessages.email.valid;
  }
  if (!values.gender) {
    error.gender = errorMessages.gender.required;
  }
  if (values.privacyPolicy.length === 0) {
    error.privacyPolicy = errorMessages.privacyPolicy.required;
  }
  if (values.file && values.file[0].size > MAX_FILE_SIZE) {
    error.file = errorMessages.file.valid;
  }
  if (Object.keys(error).length === 0) {
    unblockSubmit && unblockSubmit(true);
  } else {
    unblockSubmit && unblockSubmit(false);
  }
  return error;
}

export default validate;
