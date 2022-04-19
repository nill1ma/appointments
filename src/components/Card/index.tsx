import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { IAppointment } from "../../models/appointments";
import { formatDate } from "../../utils/handle-date";
import { CardContainer, Icon } from "./styles";

type CardProps = {
	item: IAppointment;
	setDetail: (item: IAppointment) => void;
	removeCard: (item: IAppointment) => void;
};

export default function Card({ item, setDetail, removeCard }: CardProps) {
	const isItWithin = () => {
		const date = new Date();
		console.log(
			date.getTime() >= new Date(item.start).getTime() &&
				date.getTime() <= new Date(item.end).getTime(),
			" itIsWithin"
		);
		return (
			date.getTime() >= new Date(item.start).getTime() &&
			date.getTime() <= new Date(item.end).getTime()
		);
	};
	const [itIsWithin, setItIsWithin] = useState(isItWithin());

	useEffect(() => {
		setTimeout(() => setItIsWithin(isItWithin()), 60000);

		// return () => clearInterval(interval);
	}, [itIsWithin]);

	return (
		<CardContainer onClick={() => setDetail(item)} itIsWithin={itIsWithin}>
			<Icon onClick={() => removeCard(item)} size={"sm"} icon={faTrashAlt} />
			<span>{item.title}</span>
			<div>
				<span>Starts: {formatDate(item.start.split(" ")[0])}</span>
			</div>
		</CardContainer>
	);
}
