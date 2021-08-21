import {createSelector} from "reselect";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";
// import axios from 'axios'

import {IAction, IStore} from './interfaces';
// import socket, {socketActions} from 'socket';

export const moduleName = 'applicantForm'

export const SET_OPEN_SUBMIT_MODAL = `${moduleName}/SET_OPEN_SUBMIT_MODAL`

export interface IReducerRecord {
    // joined: boolean,
    isOpenSubmitModal: boolean,
    // userName: null | string,
    // users: string[],
    // messages: IMessage[],
}

export const reducerRecord: IReducerRecord = {
    // joined: false,
    isOpenSubmitModal: false,
};

export default function reducer(state = reducerRecord, action: IAction) {
    const {type, payload} = action

    switch (type) {
        case SET_OPEN_SUBMIT_MODAL:
            return Object.assign({}, state, {
                // joined: payload.joined,
                userName: payload.userName,
                roomId: payload.roomId,
            })
        default:
            return state
    }
}

export const stateSelector = (state: IStore<IReducerRecord>) => state[moduleName]
// export const joinedSelector = createSelector(stateSelector, state => state.joined)
export const roomIdSelector = createSelector(stateSelector, state => state.roomId)
export const userNameSelector = createSelector(stateSelector, state => state.userName)
export const usersSelector = createSelector(stateSelector, state => state.users)
export const messagesSelector = createSelector(stateSelector, state => state.messages)

export const setUsers = (users: string[]): ThunkAction<void, IStore<IReducerRecord>, unknown, AnyAction> => (dispatch): void => {
    dispatch({
        type: SET_USERS,
        payload: users
    })
}

export const onLogin = (obj: IUserData): ThunkAction<void, IStore<IReducerRecord>, unknown, AnyAction> => async (dispatch): Promise<void> => {
    dispatch({
        type: JOINED,
        // payload: {joined: true, userName: obj.userName, roomId: obj.roomId},
        payload: obj,
    })

    socket.emit(socketActions.ROOM_JOIN, obj)

    const serverResponse = await axios.get(`http://localhost:9999/rooms/${obj.roomId}`)
    const responseData: IRoomData = serverResponse.data
    if (!responseData.users.includes(obj.userName)) {
        responseData.users.push(obj.userName)
    }
    dispatch({
        type: SET_USERS,
        payload: responseData.users,
    })
}


