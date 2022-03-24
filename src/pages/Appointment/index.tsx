import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CreateAppointment from "../../components/CreateAppointment";
import { IAppointment, InputAppointment } from "../../models/appointments";
import { getAppointment, saveAppointment } from "../../services/appointments";
import { CardsContainer, Container } from "./styles";

export default function Appointment() {
	const [open, setOpen] = useState<boolean>(false);
	const [appointments, setAppointments] = useState<IAppointment[]>(
		getAppointment()
	);

	const save = (appointment: InputAppointment) => {
		const { date_start, date_end, time_start, time_end, ...rest } = appointment;

		const { title, description } = rest;

		const app: IAppointment = {
			title: `${title}`,
			description: `${description}`,
			id: uuidv4(),
			start: new Date(`${date_start} ${time_start}`),
			end: new Date(`${date_end} ${time_end}`),
		};
		console.log(app, ` Current Saved appointment`);
		setAppointments([...appointments, app]);
		saveAppointment(app);
	};

	const handleOpenState = () => setOpen(!open);

	return (
		<Container>
			<div>{open && <CreateAppointment open={open} action={save} />}</div>
			<CardsContainer>
				{appointments.map((appointment: IAppointment) => {
					return <Card key={appointment.id} item={appointment} />;
				})}
			</CardsContainer>
			<Button
				bottom={`5%`}
				self_alignment={`flex-end`}
				position={`fixed`}
				label={open ? `Keep it hidden` : `Create an Environment`}
				action={handleOpenState}
			/>
		</Container>
	);
}
