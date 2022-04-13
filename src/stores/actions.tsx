import { FiltersState } from "../models/reducers/filters-state";

export type Action<T> = {
	type: string;
	payload: T;
};

export const applyFilter = (filter: FiltersState): Action<FiltersState> => ({
	type: "APPLY_FILTER",
	payload: filter,
});
