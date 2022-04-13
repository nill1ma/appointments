import { useEffect, useState } from "react";
import { PeriodFiltersEnum } from "../../models/enumns/period-filters";
import { References } from "../../models/filters-references";
import { Container, Direction } from "./styles";

type FiltersProps = {
	handleCurrentPeriod: (ref: References) => void;
};

export default function Filters({ handleCurrentPeriod }: FiltersProps) {
	const date = new Date();
	const [referencesMenu, setReferencesMenu] = useState<References[]>([
		// {
		// 	value: date.getDate(),
		// 	label: "Day",
		// 	type: PeriodFiltersEnum.DAY,
		// 	active: false,
		// },
		{
			value: date.getMonth() + 1,
			label: "Month",
			type: PeriodFiltersEnum.MONTH,
			active: false,
		},
		{
			value: date.getFullYear(),
			label: "Year",
			type: PeriodFiltersEnum.YEAR,
			active: false,
		},
	]);

	const [reference, setReference] = useState<References>({
		type: PeriodFiltersEnum.YEAR,
		value: date.getFullYear(),
	});

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
		setReference(currentReference);
	};

	useEffect(() => {
		handleCurrentPeriod(reference);
	}, [reference]);

	const filterIncrement = () =>
		setReference((prev) => {
			return {
				...prev,
				value:
					prev.type === "MONTH"
						? prev.value < 12
							? prev.value + 1
							: prev.value
						: prev.value + 1,
			};
		});

	const filterDecrement = () =>
		setReference((prev) => {
			return {
				...prev,
				value: prev.value > 1 ? prev.value - 1 : prev.value,
			};
		});

	return (
		<Container>
			<div className="refValueArea">
				<Direction isNext={false} onClick={filterDecrement}>
					Prev
				</Direction>
				<div>{reference.value}</div>
				<Direction isNext={true} onClick={filterIncrement}>
					Next
				</Direction>
			</div>
		</Container>
	);
}
