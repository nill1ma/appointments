import { ChangeEvent, useState } from "react";
import { IAppointment } from "../../models/appointments";
import Button from "../Button";
import { Container, InputArea, InputsContainer } from "./styles";

type Inputs = {
	id: string;
	name: string;
	label: string;
	type: string;
	placeholder?: string;
};

type CreateAppointmentProps = {
	isOpened: boolean;
	action: (appointment: IAppointment) => void;
};

export default function CreateAppointment({
	isOpened,
	action,
}: CreateAppointmentProps) {
	const inputs: Inputs[] = [
		{
			id: "1",
			name: `title`,
			label: `Title`,
			type: `text`,
			placeholder: `Type a Title`,
		},
		{
			id: "3",
			name: `description`,
			label: `Description`,
			type: `text`,
			placeholder: `Type a Description`,
		},
		{ id: "5", name: `start`, label: `Start`, type: `datetime-local` },
		{ id: "7", name: `end`, label: `End`, type: `datetime-local` },
	];

	const [appointment, setAppointment] = useState<IAppointment>(
		{} as IAppointment
	);

	const useAction = () => {
		action(appointment);
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
				{inputs.map(({ id, name, label, type, placeholder }: Inputs) => {
					return (
						<InputArea key={id} type={type}>
							<label key={`${label}`} htmlFor={name}>
								{label}
							</label>
							<input
								key={name}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									hadleAppointment(e)
								}
								placeholder={placeholder}
								type={type}
								name={name}
								id={name}
							/>
						</InputArea>
					);
				})}
			</InputsContainer>
			<Button label={`save`} action={useAction} />
		</Container>
	);
}
