import { combineReducers } from "redux";
import { filtersReducer } from "./filters";
const reducers = combineReducers({
	filters: filtersReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
