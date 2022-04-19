import { PeriodFiltersEnum } from "./enumns/period-filters";

export type References = {
	label?: string;
	active?: boolean;
	type: PeriodFiltersEnum;
	reference: number;
};
