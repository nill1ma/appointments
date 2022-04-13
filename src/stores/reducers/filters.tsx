import { PeriodFiltersEnum } from "../../models/enumns/period-filters";
import { FiltersState } from "../../models/reducers/filters-state";
import { Action } from "../actions";

const INITIAL_STATE: FiltersState = {
	data: {
		type: PeriodFiltersEnum.YEAR,
		reference: `${new Date().getFullYear()}`,
	},
};

function filtersReducer(
	state: FiltersState = INITIAL_STATE,
	action: Action<FiltersState>
) {
	switch (action.type) {
		case "APPLY_FILTER":
			return { ...state, data: action.payload };
		default:
			return state;
	}
}

export { filtersReducer };
