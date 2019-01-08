import { createStore, applyMiddleware, compose } from "redux";
import composeWithDevTools from "remote-redux-devtools";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
