import { IFormBlockData, IInputData } from "components/ApplicantForm/formData";

export const getAllInputsData = (
  formBlocks: IFormBlockData
): Array<IInputData> => {
  const formBlocksKeys = Object.keys(formBlocks);
  const inputs = formBlocksKeys.reduce((prev: any, curr) => {
    prev.push(...formBlocks[curr].inputs);
    return prev;
  }, []);
  return inputs;
};

export interface IDefaultInputValues {
  [inputName: string]: string | null | boolean;
}

export const getInputDefaultValues = (
  inputs: Array<IInputData>
): IDefaultInputValues => {
  return inputs.reduce((prev: any, curr: any) => {
    if (!(curr.name in prev)) {
      prev[curr.name] = curr.defaultValue;
    }
    return prev;
  }, {});
};

export function acceptPrivacyPolicy(
  checkBoxName: string,
  checkBoxValue: string,
  currentState: string[],
  setState: (value: string) => void,
  setFormikValue: (checkBoxName: string, checkBoxValue: string[]) => void
): void {
  if (currentState.includes(checkBoxValue)) {
    return;
  } else {
    setState(checkBoxValue);
    setFormikValue(checkBoxName, [checkBoxValue]);
  }
}

export function declinePrivacyPolicy(
  checkBoxName: string,
  checkBoxValue: string,
  currentState: string[],
  setState: (value: string) => void,
  setFormikValue: (checkBoxName: string, checkBoxValue: string[]) => void
): void {
  if (!currentState.includes(checkBoxValue)) {
    return;
  } else {
    setState(checkBoxValue);
    setFormikValue(checkBoxName, [""]);
  }
}
