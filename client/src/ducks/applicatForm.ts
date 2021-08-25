import {createSelector} from "reselect";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";
// import axios from 'axios'

import {IAction, IStore} from './interfaces';

export const moduleName = 'applicantForm'

export const SET_OPEN_SUBMIT_WINDOW = `${moduleName}/SET_OPEN_SUBMIT_WINDOW`
export const SET_OPEN_POLICY_WINDOW = `${moduleName}/SET_OPEN_POLICY_WINDOW`
export const SET_CHECKED_VALUES = `${moduleName}/SET_CHECKED_VALUES`
export const SET_SUBMIT_AVAILABLE = `${moduleName}/SET_SUBMIT_AVAILABLE`

export interface IReducerRecord {    
    isOpenSubmitWindow: boolean,
    isOpenPolicyWindow: boolean,    
    checkedValues: Array<string>,
    isSubmitAvailable: boolean,
}

export const reducerRecord: IReducerRecord = {    
    isOpenSubmitWindow: false,
    isOpenPolicyWindow: false,    
    checkedValues: [],
    isSubmitAvailable: false,
    
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
        case SET_CHECKED_VALUES:
            return Object.assign({}, state, {
                checkedValues: payload,
            })
        case SET_SUBMIT_AVAILABLE:
            return Object.assign({}, state, {
                isSubmitAvailable: payload,
            })
        default:
            return state
    }
}

export const stateSelector = (state: IStore<IReducerRecord>) => state[moduleName]
export const isOpenSubmitWindowSelector = createSelector(stateSelector, state => state.isOpenSubmitWindow)
export const isOpenPolicyWindowSelector = createSelector(stateSelector, state => state.isOpenPolicyWindow)
export const checkedValuesSelector = createSelector(stateSelector, state => state.checkedValues)
export const isSubmitAvailableSelector = createSelector(stateSelector, state => state.isSubmitAvailable)

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

export const setSubmitAvailable = (submitState: boolean): ThunkAction<void, IStore<IReducerRecord>, unknown, AnyAction> => (dispatch): void => {    
    dispatch({
        type: SET_SUBMIT_AVAILABLE,
        payload: submitState,
    })
}



