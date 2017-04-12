import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import characters from "./ducks/characters";

export default createStore ( characters, undefined, applyMiddleware( promiseMiddleware() ) );
