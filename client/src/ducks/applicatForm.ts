import { createSelector } from "reselect";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { IAction, IStore } from "./interfaces";

export const moduleName = "applicantForm";

export const SET_OPEN_SUBMIT_WINDOW = `${moduleName}/SET_OPEN_SUBMIT_WINDOW`;
export const SET_OPEN_POLICY_WINDOW = `${moduleName}/SET_OPEN_POLICY_WINDOW`;
export const SET_CHECKED_VALUES = `${moduleName}/SET_CHECKED_VALUES`;
export const SET_SUBMIT_AVAILABLE = `${moduleName}/SET_SUBMIT_AVAILABLE`;
export const SET_USER_NAME = `${moduleName}/SET_USER_NAME`;
export const HANDLE_FORM_DATA = `${moduleName}/HANDLE_FORM_DATA`;
export const CATCH_ERROR = `${moduleName}/CATCH_ERROR`;
export const SET_DATA_SUBMITTED = `${moduleName}/SET_DATA_SUBMITTED`;

export interface IReducerRecord {
  isOpenSubmitWindow: boolean;
  isOpenPolicyWindow: boolean;
  checkedValues: Array<string>;
  isSubmitAvailable: boolean;
  userName: string | null;
  formData: any;
  isDataSubmitted: boolean;
  error: string | null;
}

export const reducerRecord: IReducerRecord = {
  isOpenSubmitWindow: false,
  isOpenPolicyWindow: false,
  checkedValues: [],
  isSubmitAvailable: false,
  userName: null,
  formData: {},
  error: null,
  isDataSubmitted: false,
};

export default function reducer(state = reducerRecord, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case SET_OPEN_SUBMIT_WINDOW:
      return Object.assign({}, state, {
        isOpenSubmitWindow: payload,
      });
    case SET_OPEN_POLICY_WINDOW:
      return Object.assign({}, state, {
        isOpenPolicyWindow: payload,
      });
    case SET_CHECKED_VALUES:
      return Object.assign({}, state, {
        checkedValues: payload,
      });
    case SET_SUBMIT_AVAILABLE:
      return Object.assign({}, state, {
        isSubmitAvailable: payload,
      });
    case SET_USER_NAME:
      return Object.assign({}, state, {
        userName: payload,
      });
    case HANDLE_FORM_DATA:
      return Object.assign({}, state, {
        formData: payload,
      });
    case CATCH_ERROR:
      return Object.assign({}, state, {
        error: payload,
      });
    case SET_DATA_SUBMITTED:
      return Object.assign({}, state, {
        isDataSubmitted: payload,
      });
    default:
      return state;
  }
}

export const stateSelector = (state: IStore<IReducerRecord>) =>
  state[moduleName];
export const isOpenSubmitWindowSelector = createSelector(
  stateSelector,
  (state) => state.isOpenSubmitWindow
);
export const isOpenPolicyWindowSelector = createSelector(
  stateSelector,
  (state) => state.isOpenPolicyWindow
);
export const checkedValuesSelector = createSelector(
  stateSelector,
  (state) => state.checkedValues
);
export const isSubmitAvailableSelector = createSelector(
  stateSelector,
  (state) => state.isSubmitAvailable
);
export const userNameSelector = createSelector(
  stateSelector,
  (state) => state.userName
);
export const formDataSelector = createSelector(
  stateSelector,
  (state) => state.formData
);
export const isDataSubmittedSelector = createSelector(
  stateSelector,
  (state) => state.isDataSubmitted
);

export const setOpenSubmitWindow = (openState: boolean): AnyAction => {
  return {
    type: SET_OPEN_SUBMIT_WINDOW,
    payload: openState,
  };
};

export const setOpenPolicyWindow = (openState: boolean): AnyAction => {
  return {
    type: SET_OPEN_POLICY_WINDOW,
    payload: openState,
  };
};

export const setCheckedValues =
  (
    checkboxValue: string
  ): ThunkAction<void, IStore<IReducerRecord>, unknown, AnyAction> =>
  (dispatch, getState): void => {
    const currentCheckedValues = checkedValuesSelector(getState());
    const nextCheckedValues = currentCheckedValues.includes(checkboxValue)
      ? currentCheckedValues.filter((value: string) => value !== checkboxValue)
      : [...currentCheckedValues, checkboxValue];

    dispatch({
      type: SET_CHECKED_VALUES,
      payload: nextCheckedValues,
    });
  };

export const setSubmitAvailable = (submitState: boolean): AnyAction => {
  return {
    type: SET_SUBMIT_AVAILABLE,
    payload: submitState,
  };
};

export const formDataHandler =
  (
    formValues: any
  ): ThunkAction<void, IStore<IReducerRecord>, unknown, AnyAction> =>
  async (dispatch, getState): Promise<any> => {
    dispatch({
      type: HANDLE_FORM_DATA,
      payload: formValues,
    });

    const formData = formDataSelector(getState());
    const userName = formData.firstName;

    dispatch({
      type: SET_USER_NAME,
      payload: userName,
    });

    const dataToSend = formData;

    /**
     * TODO: there should be configuration data for further forwarding the form data to the server
     * for example:
     * const config: any = {
     *  method: 'post',
     *  url: '/',
     *  headers: {
     *      'Content-Type': 'application/json'
     *  },
     *  data : dataToSend
     * }
     */

    try {
      // await axios(config)
      // * sending data to server
      console.warn("Данные отправлены: ", dataToSend);
      dispatch({
        type: SET_DATA_SUBMITTED,
        payload: true,
      });
    } catch (err: any) {
      const error = err?.response?.data;
      console.error(error);
      dispatch({
        type: CATCH_ERROR,
        payload: error,
      });
    }
  };
