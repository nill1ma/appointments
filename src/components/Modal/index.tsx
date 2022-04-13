import { useState } from "react";
import styled from "styled-components";
import { PeriodFiltersEnum } from "../../models/enumns/period-filters";
import Button from "../Button";
import { ModalBackground, ModalContent } from "./styles";

type PeriodType = {
	type: PeriodFiltersEnum;
	closeModal: () => void;
};

export default function Modal({ type, closeModal }: PeriodType) {
	const clear = () => closeModal();
	return (
		<ModalBackground>
			<ModalContent>
				<h3>Choose an {type}</h3>
				<Years />
				<div className="actions">
					<Button label={"Cancel"} action={clear} borderRadius={"0"} />
					<Button label={"Clear"} action={clear} borderRadius={"0"} />
					<Button label={"Save"} action={clear} borderRadius={"0"} />
				</div>
			</ModalContent>
		</ModalBackground>
	);
}

const Container = styled.div`
	padding-top: 5px;
	margin: 0 auto;
	width: 50%;
	display: flex;
	justify-content: space-around;
`;

type YearsStyleProps = {
	isNext?: boolean;
	active?: boolean;
};

const Direction = styled.button<YearsStyleProps>`
	cursor: pointer;
	height: 50px;
	width: 100px;
	border-radius: ${({ isNext }) => (isNext ? `0 50% 50% 0` : `50% 0 0 50%`)};
	background-color: #00bfff;
	border: none;
`;

const Item = styled.div<YearsStyleProps>`
	display: flex;
	padding: 10px;
	cursor: pointer;
	background-color: ${({ active }) => (active ? `#00bfff` : `#ffffff`)};
	&:hover {
		background-color: #00bfff;
		color: #ffffff;
	}
`;

const Years = () => {
	const current = new Date().getFullYear();
	const [years, setYears] = useState([
		{
			id: 1,
			value: current,
			active: false,
		},
		{ id: 2, value: current + 1, active: false },
		{ id: 3, value: current + 2, active: false },
	]);
	const handleYears = (symbol: string) => {
		const last = years[`+` === symbol ? years.length - 1 : 0];

		`+` === symbol
			? setYears([
					{ id: 1, value: eval(`${last.value} ${symbol} 1`), active: false },
					{ id: 2, value: eval(`${last.value} ${symbol} 2`), active: false },
					{ id: 3, value: eval(`${last.value} ${symbol} 3`), active: false },
			  ])
			: setYears([
					{ id: 1, value: eval(`${last.value} ${symbol} 3`), active: false },
					{ id: 2, value: eval(`${last.value} ${symbol} 2`), active: false },
					{ id: 3, value: eval(`${last.value} ${symbol} 1`), active: false },
			  ]);
	};

	const selectAnYear = (id: number) => {
		setYears((previous) => {
			return previous.map((prev) => {
				prev.active = prev.id === id;
				return prev;
			});
		});
	};

	return (
		<Container>
			<Direction isNext={false} onClick={() => handleYears("-")}>
				Prev
			</Direction>
			{years.map((year) => (
				<Item onClick={() => selectAnYear(year.id)} active={year.active}>
					{year.value}
				</Item>
			))}
			<Direction isNext={true} onClick={() => handleYears("+")}>
				Next
			</Direction>
		</Container>
	);
};
