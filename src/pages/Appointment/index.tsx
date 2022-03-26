import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardDetail from "../../components/CardDetail";
import CreateAppointment from "../../components/CreateAppointment";
import { IAppointment } from "../../models/appointments";
import { getAppointment, saveAppointment } from "../../services/appointments";
import { CardsContainer, Container, Content } from "./styles";

export default function Appointment() {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [appointments, setAppointments] = useState<IAppointment[]>(
		getAppointment()
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

	return (
		<Container>
			<div>
				{isOpened && <CreateAppointment isOpened={isOpened} action={save} />}
			</div>
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
				self_alignment={`flex-end`}
				position={`fixed`}
				label={isOpened ? `Keep it hidden` : `Create an Environment`}
				action={handleOpenedState}
			/>
		</Container>
	);
}
