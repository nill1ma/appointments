import {
	faCaretSquareLeft,
	faCaretSquareRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { monthLabels } from "../../helpers/constants";
import { PeriodFiltersEnum } from "../../models/enumns/period-filters";
import { References } from "../../models/filters-references";
import { RootState } from "../../stores/reducers";
import { applyFilter } from "../../stores/reducers/actions/filters";
import { PeriodFilterPayload } from "../../stores/reducers/filters";
import { Container, Icon } from "./styles";

type FiltersProps = {
	handleCurrentPeriod: (ref: References) => void;
};

export default function Filters({ handleCurrentPeriod }: FiltersProps) {
	const date = new Date();
	const dispatch = useDispatch();
	const [referencesMenu, setReferencesMenu] = useState<References[]>([
		// {
		// 	reference: date.getDate(),
		// 	label: "Day",
		// 	type: PeriodFiltersEnum.DAY,
		// 	active: false,
		// },
		{
			reference: date.getMonth() + 1,
			label: "Month",
			type: PeriodFiltersEnum.MONTH,
			active: false,
		},
		{
			reference: date.getFullYear(),
			label: "Year",
			type: PeriodFiltersEnum.YEAR,
			active: false,
		},
	]);

	const { data }: PeriodFilterPayload = useSelector(
		(state: RootState) => state.filters
	);

	const handleCurrentReference = (currentReference: References) => {
		setReferencesMenu((previous: References[]) => {
			return [
				...previous.map((prev) => {
					prev.type === currentReference.type
						? (prev.active = true)
						: (prev.active = false);

					return prev;
				}),
			];
		});
		// setReference(currentReference);
	};

	useEffect(() => {
		handleCurrentPeriod(data);
	}, [data]);

	const filterIncrement = () => {
		const { type, reference } = data;
		dispatch(
			applyFilter({
				type,
				reference:
					"MONTH" === type
						? reference < 12
							? reference + 1
							: reference
						: reference + 1,
			})
		);
	};

	const filterDecrement = () => {
		const { type, reference } = data;
		dispatch(
			applyFilter({
				type,
				reference: reference > 1 ? reference - 1 : reference,
			})
		);
	};

	return (
		<Container>
			<div className="refValueArea">
				<Icon icon={faCaretSquareLeft} onClick={filterDecrement} />
				<div>
					{"MONTH" === data.type ? monthLabels[data.reference] : data.reference}
				</div>
				<Icon icon={faCaretSquareRight} onClick={filterIncrement} />
			</div>
		</Container>
	);
}
