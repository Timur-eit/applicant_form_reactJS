interface IErrorMessages {
  [fieldName: string]: {
    required?: string;
    valid?: string;
  };
}

const errorMessages: IErrorMessages = {
  firstName: {
    required: "укажите имя",
  },
  lastName: {
    required: "укажите фамилию",
  },
  email: {
    required: "укажите электронную почту",
    valid: "укажите корректный формат email",
  },
  gender: {
    required: "укажите пол",
  },
  privacyPolicy: {
    required: "необходимо принять условия",
  },
  file: {
    valid: "загружайте файл размером не более 16 mb",
  },
};

export default errorMessages;
