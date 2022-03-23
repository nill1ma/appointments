import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CreateAppointment from "../../components/CreateAppointment";
import { IAppointment } from "../../models/environment";
import { getAppointment, saveAppointment } from "../../services/appointments";
import { CardsContainer, Container } from "./styles";

export default function Appointment() {
	const [open, setOpen] = useState<boolean>(false);
	const [appointments, setAppointments] = useState<IAppointment[]>(
		getAppointment()
	);

	useEffect(() => {
		console.log(new Date().getHours(), new Date().getMinutes(), `app hours`);
	}, []);

	const save = (appointment: IAppointment) => {
		const app = { ...appointment, id: uuidv4() };

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