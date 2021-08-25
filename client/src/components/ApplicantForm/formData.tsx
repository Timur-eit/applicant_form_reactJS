import React from 'react';
import {getAllInputsData, getInputDefaultValues} from 'shared/utils';
export interface IInputData {
    name: string,
    label: React.ReactElement<string> | string,
    type: string,
    required: boolean,
    defaultValue: string | null | boolean | Array<string>,
    options?: Array<{
        labelName: string | React.ReactElement<string, string | React.JSXElementConstructor<any>>,
        link?: string | React.ReactElement<string, string | React.JSXElementConstructor<any>>,
        value: string,
    }>
}

interface IBlock {
    title?: string,
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
    },
    gitHubSection: {
        title: 'Github',
        inputs: [
            {
                name: 'github-link',
                label: <p>Вставьте ссылку на Github</p>,
                type: 'text',
                required: false,
                defaultValue: '',
            }
        ]
    },
    privacyPolicyCheck: {
        inputs: [
            {
                name: 'privacyPolicy',
                label: '',
                type: 'checkbox',
                options: [
                    {
                        labelName: <><sup>*</sup>Я согласен с </>,
                        link: 'политикой конфиденциальности',
                        value: 'agree'
                    },
                ],
                required: true,
                defaultValue: '',
            }
        ]
    }
}


const allInputs = getAllInputsData(formBlocks);
export const inputDefaultValues =  getInputDefaultValues(allInputs);
