import React from 'react';
import {getAllInputsData, getInputDefaultValues} from 'shared/utils';
export interface IInputData {
    name: string,
    label: React.ReactElement<string> | string,
    type: string,
    required: boolean,
    defaultValue: string | null | boolean,
    options?: Array<{
        labelName: string,
        value: string,
    }>
}

interface IBlock {
    title: string,
    inputs: IInputData[]
}

export interface IFormBlockData {
    [blockName: string]: IBlock
}

export const formName = 'Анкета соискателя';
export const formBlocks: IFormBlockData = {
    privateData: {
        title: 'Личные данные',
        inputs: [
            {
                name: 'firstName',
                label: <p>Имя<sup>*</sup></p>,
                type: 'text',
                required: true,
                defaultValue: '',
            },
            {
                name: 'lastName',
                label: <p>Фамилия<sup>*</sup></p>,
                type: 'text',
                required: true,
                defaultValue: '',

            },
            {
                name: 'email',
                label: <p>Электронная почта<sup>*</sup></p>,
                type: 'email',
                required: true,
                defaultValue: '',
            },
            {
                name: 'file',
                label: 'Загрузить резюме',
                type: 'file',
                required: false,
                defaultValue: null,
            },
            {
                name: 'gender',
                label: <p>Пол<sup>*</sup></p>,
                type: 'radio',
                required: true,
                defaultValue: '',
                options: [
                    {labelName: 'Мужчина', value: 'male'},
                    {labelName: 'Женщина', value: 'female'}
                ]
            }
        ]
    }
}


const allInputs = getAllInputsData(formBlocks);
export const inputDefaultValues =  getInputDefaultValues(allInputs);
