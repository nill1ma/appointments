import { ChangeEvent, useState } from "react";
import { IAppointment } from "../../models/appointments";
import { Users } from "../../models/users";
import Button from "../Button";
import { Container, InputArea, InputsContainer } from "./styles";

type Inputs = {
	id: string;
	name: string;
	label: string;
	type: string;
	placeholder?: string;
	value?: string;
};

type CreateAppointmentProps = {
	isOpened: boolean;
	action: (appointment: IAppointment) => void;
};

export default function CreateAppointment({
	isOpened,
	action,
}: CreateAppointmentProps) {
	const [appointment, setAppointment] = useState<IAppointment>(
		{} as IAppointment
	);
	const inputs: Inputs[] = [
		{
			id: "1",
			name: `title`,
			label: `Title`,
			type: `text`,
			placeholder: `Type a Title`,
			value: appointment.title,
		},
		{
			id: "3",
			name: `description`,
			label: `Description`,
			type: `text`,
			placeholder: `Type a Description`,
			value: appointment.description,
		},
		{
			id: "5",
			name: `start`,
			label: `Start`,
			type: `datetime-local`,
			value: appointment.start,
		},
		{
			id: "7",
			name: `end`,
			label: `End`,
			type: `datetime-local`,
			value: appointment.end,
		},
	];

	const useAction = () => {
		action(appointment);
		setAppointment({} as IAppointment);
	};

	const hadleAppointment = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setAppointment((previous: IAppointment) => {
			return { ...previous, [name]: value };
		});
	};

	return (
		<Container open={isOpened}>
			<InputsContainer>
				{inputs.map(({ id, name, label, type, placeholder, value }: Inputs) => {
					return (
						<InputArea key={id} type={type}>
							<label htmlFor={name}>{label}</label>
							<input
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									hadleAppointment(e)
								}
								placeholder={placeholder}
								type={type}
								name={name}
								id={name}
								value={value}
							/>
						</InputArea>
					);
				})}
			</InputsContainer>
			<Button label={`save`} action={useAction} />
		</Container>
	);
}
