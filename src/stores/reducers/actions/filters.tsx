export type Action<T> = {
	type: string;
	payload: T;
};

export const applyFilter = (filter: string): Action<string> => ({
	type: "APPLY_FILTER",
	payload: filter,
});
