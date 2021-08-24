import {IFormBlockData, IInputData} from 'components/ApplicantForm/formData'


export const getAllInputsData = (formBlocks: IFormBlockData): Array<IInputData> => {
    const formBlocksKeys = Object.keys(formBlocks);
    const inputs = formBlocksKeys.reduce((prev: any, curr) => {
        prev.push(...formBlocks[curr].inputs);
        return prev;
    }, []);
    return inputs;
}

export interface IDefaultInputValues {
    [inputName: string]: string | null | boolean
}


export const getInputDefaultValues = (inputs: Array<IInputData>): IDefaultInputValues => {
    return inputs.reduce((prev: any, curr: any) => {
        if (!(curr.name in prev)) {
            prev[curr.name] = curr.defaultValue
        }
        return prev;
    }, {})
}
