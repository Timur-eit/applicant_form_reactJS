import {combineReducers} from "redux";
import applicantFormReducer, {moduleName as applicantForm} from 'ducks/chat';

export default combineReducers({[applicantForm] : applicantFormReducer});