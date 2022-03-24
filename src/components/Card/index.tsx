import { IAppointment } from "../../models/appointments";
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

	const convertDate = (date: Date) => `${date.getHours()} ${date.getMinutes()}`;

	return (
		<CardContainer>
			<span>{item.title}</span>
			<span>{item.description}</span>
			<div>
				<div>
					<span>Start: </span>
					<span>{convertDate(item.start)}</span>
					<span>{convertDate(item.end)}</span>
				</div>
			</div>
		</CardContainer>
	);
}
