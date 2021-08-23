import {combineReducers} from "redux";
import applicantFormReducer, {moduleName as applicantForm} from 'ducks/applicatForm';

export default combineReducers({[applicantForm] : applicantFormReducer});