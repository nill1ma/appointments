import { PeriodFiltersEnum } from "../enumns/period-filters";

export type FiltersState = {
	data: FilterStateData;
};

export type FilterStateData = {
	type: PeriodFiltersEnum;
	reference: string;
};
