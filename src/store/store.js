import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profileReducer";
import accountReducer from "./accountReducer";
import { thunk } from "redux-thunk"; // Use default import for thunk

const rootReducer = combineReducers({
  profile: profileReducer,
  account: accountReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default rootStore;
