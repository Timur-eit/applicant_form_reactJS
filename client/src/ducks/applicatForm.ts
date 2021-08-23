import {createSelector} from "reselect";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";
// import axios from 'axios'

import {IAction, IStore} from './interfaces';
// import socket, {socketActions} from 'socket';

export const moduleName = 'applicantForm'

export const SET_OPEN_SUBMIT_WINDOW = `${moduleName}/SET_OPEN_SUBMIT_WINDOW`
export const SET_OPEN_POLICY_WINDOW = `${moduleName}/SET_OPEN_POLICY_WINDOW`

export interface IReducerRecord {
    // joined: boolean,
    isOpenSubmitWindow: boolean,
    isOpenPolicyWindow: boolean,
    // userName: null | string,
    // users: string[],
    // messages: IMessage[],
}

export const reducerRecord: IReducerRecord = {    
    isOpenSubmitWindow: false,
    isOpenPolicyWindow: false,
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
        default:
            return state
    }
}

export const stateSelector = (state: IStore<IReducerRecord>) => state[moduleName]
export const isOpenSubmitWindowSelector = createSelector(stateSelector, state => state.isOpenSubmitWindow)
export const isOpenPolicyWindowSelector = createSelector(stateSelector, state => state.isOpenPolicyWindow)

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


