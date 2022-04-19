import { PeriodFiltersEnum } from "../../models/enumns/period-filters";
import { References } from "../../models/filters-references";
import { PeriodFilterStore } from "../../models/reducers/filters-store";
import { Action } from "./actions/filters";

export type PeriodFilterPayload = {
	data: References;
};

const date = new Date();

const INITIAL_STATE: PeriodFilterStore = {
	data: {
		type: PeriodFiltersEnum.YEAR,
		reference: date.getFullYear(),
	},
};

function periodFilterReducer(
	state: PeriodFilterPayload = INITIAL_STATE,
	action: Action<References>
) {
	switch (action.type) {
		case "APPLY_FILTER":
			return { data: action.payload };
		default:
			return state;
	}
}

export { periodFilterReducer };
