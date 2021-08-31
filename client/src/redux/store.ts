import { createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer";

function setReduxMiddleware(logger: Middleware, ...middleware: Middleware[]): Middleware[] {
    if (process.env.NODE_ENV !== 'production') {
        return [...middleware, logger];
    } else {
        return [...middleware];
    }
}

const enhancer = applyMiddleware(...setReduxMiddleware(logger, thunk));
const store = createStore(reducer, enhancer);

export default store;
