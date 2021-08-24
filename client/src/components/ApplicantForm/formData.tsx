import React from 'react';

export const formName = 'Анкета соискателя';

interface IInputData {
    name: string,
    label: React.ReactElement<string> | string,
    type: string,
    required: boolean,
}

interface IFormBlockData {
    [blockName: string]: {
        title: string,
        inputs: IInputData[]
    }
}

export const formBlocks: IFormBlockData = {
    privateData: {
        title: 'Личные данные',
        inputs: [
            {
                name: 'firstName',
                label: <p>Имя<sup>*</sup></p>,
                type: 'text',
                required: true,
            },
            {
                name: 'lastName',
                label: <p>Фамилия<sup>*</sup></p>,
                type: 'text',
                required: true,

            },
            {
                name: 'email',
                label: <p>Электронная почта<sup>*</sup></p>,
                type: 'text',
                required: true,
            },
            {
                name: 'file',
                label: 'Загрузить резюме',
                type: 'file',
                required: false,
            },
            {
                name: 'gender',
                label: <p>Пол<sup>*</sup></p>,
                type: 'radio',
                required: true,
            }
        ]
    }
}

