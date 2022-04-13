import { IAppointment } from "../../models/appointments";
import { formatDate } from "../../utils/handle-date";
import { CardContainer } from "./styles";

type CardProps = {
	item: IAppointment;
	setDetail: (item: IAppointment) => void;
};

export default function Card({ item, setDetail }: CardProps) {
	const itIsWithin = () => {
		const date = new Date();
		return (
			date.getTime() >= new Date(item.start).getTime() &&
			date.getTime() <= new Date(item.end).getTime()
		);
	};

	return (
		<CardContainer onClick={() => setDetail(item)} itIsWithin={itIsWithin()}>
			<span>{item.title}</span>
			<div>
				<span>Starts: {formatDate(item.start.split(" ")[0])}</span>
			</div>
		</CardContainer>
	);
}
