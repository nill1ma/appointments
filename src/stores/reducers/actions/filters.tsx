import { References } from "../../../models/filters-references";

export type Action<T> = {
	type: string;
	payload: T;
};

export const applyFilter = (filter: References): Action<References> => ({
	type: "APPLY_FILTER",
	payload: filter,
});
