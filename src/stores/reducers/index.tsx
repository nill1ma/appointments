import { combineReducers } from "redux";
import { appointmentsReducer } from "./appointments";
import { periodFilterReducer } from "./filters";
const reducers = combineReducers({
	filters: periodFilterReducer,
	appointments: appointmentsReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
