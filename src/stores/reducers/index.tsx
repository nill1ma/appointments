import { combineReducers } from "redux";
import { appointmentsReducer } from "./appointments";
import { filtersReducer } from "./filters";
const reducers = combineReducers({
	filters: filtersReducer,
	appointments: appointmentsReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
