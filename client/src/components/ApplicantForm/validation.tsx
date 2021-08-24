// import {Inputs} from './formData'

// interface IValues {
//     [property: string]: string | null | boolean | FileList
// }

interface IError {
    [field : string] : string
}

function validate(values: any): IError {
    const error: IError = {};
    if(!values.firstName) {
        error.firstName = 'firstName is required';
    }
    if(!values.file) {
        error.file = 'FILE is required';
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
    return error;
}

export default validate;