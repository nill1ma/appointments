import { FilterStoreData } from "../../models/reducers/filters-store";
import { Action } from "./actions/filters";

type FilterPayload = {
	data: string;
};

const INITIAL_STATE: FilterStoreData = {
	data: "",
};

function filtersReducer(
	state: FilterPayload = INITIAL_STATE,
	action: Action<string>
) {
	switch (action.type) {
		case "APPLY_FILTER":
			return { data: action.payload };
		default:
			return state;
	}
}

export { filtersReducer };
