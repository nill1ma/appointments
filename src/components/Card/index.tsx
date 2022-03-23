import { IAppointment } from "../../models/environment";
import { IEnvironments } from "../../models/environments";
import { CardContainer } from "./styles";

type CardProps = {
	item: IEnvironments | IAppointment;
};

export default function Card({ item }: CardProps) {
	const itsToDay = (date: string, time: string) => {
		const instance = new Date();
		const currentDate = `${instance.getFullYear()}-${addZero(
			instance.getMonth() + 1
		)}-${addZero(instance.getDate())}`;

		const currentTime = `${addZero(instance.getHours())}:${addZero(
			instance.getMinutes()
		)}`;

		console.log(performance.now(), " performance.now()");

		return currentDate === date && currentTime === time;
	};

	const addZero = (item: number) => (item < 10 ? `0${item}` : `${item}`);

	return (
		<CardContainer isItToday={itsToDay(item.date_start, item.time_start)}>
			<span>{item.title}</span>
			<span>{item.description}</span>
			<div>
				<div>
					<span>Start: </span>
					<span>{item.date_start}</span>
					<span>{item.time_start}</span>
				</div>
				<div>
					<span>End: </span>
					<span>{item.date_end}</span>
					<span>{item.time_end}</span>
				</div>
			</div>
		</CardContainer>
	);
}
