import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardDetail from "../../components/CardDetail";
import CreateAppointment from "../../components/CreateAppointment";
import Filters from "../../components/Filters";
import { IAppointment } from "../../models/appointments";
import { References } from "../../models/filters-references";
import { getAppointments, saveAppointment } from "../../services/appointments";
import { CardsContainer, Container, Content } from "./styles";

export default function Appointment() {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [appointments, setAppointments] = useState<IAppointment[]>(
		getAppointments()
	);

	const [detail, setDetail] = useState<IAppointment>();

	const save = (appointment: IAppointment) => {
		const app: IAppointment = {
			...appointment,
			id: uuidv4(),
			start: `${appointment.start}:00`,
			end: `${appointment.end}:59`,
		};

		setAppointments([...appointments, app]);
		saveAppointment(app);
	};

	const handleOpenedState = () => setIsOpened(!isOpened);

	const filterAppointments = (reference: References) => {
		const allAppointments: IAppointment[] = getAppointments();
		const filteredAppointments = allAppointments.filter((app: IAppointment) => {
			const { type, value } = reference;
			const date = new Date(app.start);
			// const result = compareReferences(type, d, String(value));
			const result = date.getFullYear() === reference.value;
			return result;
		});
		setAppointments([...filteredAppointments]);
	};

	const compareReferences = (type: string, filter: Date, reference: string) => {
		switch (type) {
			case "MONTH":
				return `${filter.getMonth() + 1}` === reference;
			default:
				return String(filter.getFullYear()) === reference;
		}
	};

	return (
		<Container>
			<>
				{isOpened ? (
					<CreateAppointment isOpened={isOpened} action={save} />
				) : (
					<Filters handleCurrentPeriod={filterAppointments} />
				)}
			</>
			<Content>
				<CardsContainer hasDetail={detail !== undefined}>
					{appointments.map((appointment: IAppointment) => {
						return (
							<Card
								key={appointment.id}
								item={appointment}
								setDetail={setDetail}
							/>
						);
					})}
				</CardsContainer>
				{detail && <CardDetail detail={detail} setDetail={setDetail} />}
			</Content>
			<Button
				bottom={`5%`}
				right={`1%`}
				self_alignment={`flex-end`}
				position={`fixed`}
				label={isOpened ? `Keep it hidden` : `Create an Environment`}
				action={handleOpenedState}
			/>
		</Container>
	);
}
