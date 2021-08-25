interface IError {
    [field : string] : string
}

function validate(values: any, unblockSubmit?: (state: boolean) => void): IError {
    const error: IError = {};
    if(!values.firstName) {
        error.firstName = 'firstName is required';
    }
    if(!values.lastName) {
        error.lastName = 'lastName is required';
    }
    if (!values.email) {
        error.email = 'email is required';
    } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))) {
        error.email = "email don't match";
    }
    if(!values.gender) {
        error.gender = 'Укажите пол';
    }
    if(values.privacyPolicy.length === 0) {
        error.privacyPolicy = 'Необходимо принять условия';
    }

    if (Object.keys(error).length === 0) {
        unblockSubmit && unblockSubmit(true);
    } else {
        unblockSubmit && unblockSubmit(false);
    }

    console.log(error)
    return error;
}

export default validate;