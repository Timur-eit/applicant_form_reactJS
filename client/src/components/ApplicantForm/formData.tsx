import React from 'react';
import {getAllInputsData, getInputDefaultValues} from 'shared/utils';
export interface IInputData {
    name: string,
    label: React.ReactElement<string> | string,
    type: string,
    required: boolean,
    defaultValue: string | null | boolean,
    options?: Array<{
        labelName: string | React.ReactElement<string>,
        value: string | boolean,
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
                name: 'privacy-policy-check',
                label: '',
                type: 'checkbox',
                options: [
                    {
                        labelName: (
                            <p>
                                <sup>*</sup>
                                Я согласен с 
                                <a href={'/'} target={'_blank'} rel="noreferrer">политикой конфиденциальности</a>
                            </p>
                            ),
                        value: 'true'
                    },
                ],
                required: true,
                defaultValue: 'false',
            }
        ]
    }
}


const allInputs = getAllInputsData(formBlocks);
export const inputDefaultValues =  getInputDefaultValues(allInputs);
