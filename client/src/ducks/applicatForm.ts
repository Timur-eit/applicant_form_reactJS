import {createSelector} from "reselect";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";
// import axios from 'axios'

import {IAction, IStore} from './interfaces';
// import socket, {socketActions} from 'socket';

export const moduleName = 'applicantForm'

export const SET_OPEN_SUBMIT_WINDOW = `${moduleName}/SET_OPEN_SUBMIT_WINDOW`
export const SET_OPEN_POLICY_WINDOW = `${moduleName}/SET_OPEN_POLICY_WINDOW`
export const SET_PRIVATE_POLICY_AGREE = `${moduleName}/SET_PRIVATE_POLICY_AGREE`
export const SET_CHECKED_VALUES = `${moduleName}/SET_CHECKED_VALUES`

export interface IReducerRecord {    
    isOpenSubmitWindow: boolean,
    isOpenPolicyWindow: boolean,
    isPrivatePolicyChecked: boolean,
    checkedValues: Array<string>,
}

export const reducerRecord: IReducerRecord = {    
    isOpenSubmitWindow: false,
    isOpenPolicyWindow: false,
    isPrivatePolicyChecked: false,
    checkedValues: [],
    
};

export default function reducer(state = reducerRecord, action: IAction) {
    const {type, payload} = action

    switch (type) {
        case SET_OPEN_SUBMIT_WINDOW:
            return Object.assign({}, state, {
                isOpenSubmitWindow: payload,
            })
        case SET_OPEN_POLICY_WINDOW:
            return Object.assign({}, state, {
                isOpenPolicyWindow: payload,
            })
        case SET_PRIVATE_POLICY_AGREE:
            return Object.assign({}, state, {
                isPrivatePolicyChecked: payload,
            })
        case SET_CHECKED_VALUES:
            return Object.assign({}, state, {
                checkedValues: payload,
            })
        default:
            return state
    }
}

export const stateSelector = (state: IStore<IReducerRecord>) => state[moduleName]
export const isOpenSubmitWindowSelector = createSelector(stateSelector, state => state.isOpenSubmitWindow)
export const isOpenPolicyWindowSelector = createSelector(stateSelector, state => state.isOpenPolicyWindow)
export const isPrivatePolicyCheckedSelector = createSelector(stateSelector, state => state.isPrivatePolicyChecked)
export const checkedValuesSelector = createSelector(stateSelector, state => state.checkedValues)

export const setOpenSubmitWindow = (openState: boolean): ThunkAction<void, IStore<IReducerRecord>, unknown, AnyAction> => (dispatch): void => {    
    dispatch({
        type: SET_OPEN_SUBMIT_WINDOW,
        payload: openState,
    })
}
export const setOpenPolicyWindow = (openState: boolean): ThunkAction<void, IStore<IReducerRecord>, unknown, AnyAction> => (dispatch): void => {    
    dispatch({
        type: SET_OPEN_POLICY_WINDOW,
        payload: openState,
    })
}

export const setPrivatePolicyChecked = (agreeState: boolean): ThunkAction<void, IStore<IReducerRecord>, unknown, AnyAction> => (dispatch): void => {    
    dispatch({
        type: SET_PRIVATE_POLICY_AGREE,
        payload: agreeState,
    })
}
export const setCheckedValues = (checkboxValue: string): ThunkAction<void, IStore<IReducerRecord>, unknown, AnyAction> => (dispatch, getState): void => {    
    const currentCheckedValues = checkedValuesSelector(getState())
    const nextCheckedValues = currentCheckedValues.includes(checkboxValue) ?
    currentCheckedValues.filter((value: string) => value !== checkboxValue) :
    [...currentCheckedValues, checkboxValue]
    
    dispatch({
        type: SET_CHECKED_VALUES,
        payload: nextCheckedValues,
    })
}


