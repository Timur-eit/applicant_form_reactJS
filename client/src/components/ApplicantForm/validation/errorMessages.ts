interface IErrorMessages {
    [fieldName: string]: {
        required?: string,
        valid?: string
    }
}

const errorMessages: IErrorMessages = {
    firstName: {
        required: 'укажите имя',
    },
    lastName: {
        required: 'укажите фамилию',
    },
    email: {
        required: 'укажите электронную почту',
        valid: 'укажите корректный формат email',
    },
    gender: {
        required: 'укажите пол',
    },
    privacyPolicy: {
        required: 'необходимо принять условия',
    },
    file: {
        valid: 'загрузите один файл не больше 15Мб'
    }
}

export default errorMessages;