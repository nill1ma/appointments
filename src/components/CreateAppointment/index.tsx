import { ChangeEvent, useState } from "react";
import { IAppointment } from "../../models/environment";
import Button from "../Button";
import { Container, InputArea, InputsContainer } from "./styles";

type Inputs = {
	id: string;
	name: string;
	label: string;
	type: string;
};

type CreateAppointmentProps = {
	open: boolean;
	action: (appointment: IAppointment) => void;
};

export default function CreateAppointment({
	open,
	action,
}: CreateAppointmentProps) {
	const inputs: Inputs[] = [
		{ id: "1", name: `title`, label: `Title:`, type: `text` },
		{ id: "3", name: `description`, label: `Description:`, type: `text` },
		{ id: "5", name: `date_start`, label: `Date Start:`, type: `date` },
		{ id: "7", name: `date_end`, label: `Date End:`, type: `date` },
		{ id: "9", name: `time_start`, label: `Time Start:`, type: `time` },
		{ id: "11", name: `time_end`, label: `Time End:`, type: `time` },
	];

	const [appointment, setAppointment] = useState<IAppointment>(
		{} as IAppointment
	);

	const useAction = () => {
		console.log(appointment, `appointment`);
		action(appointment);
	};

	const hadleAppointment = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setAppointment((previous: IAppointment) => {
			return { ...previous, [name]: value };
		});
	};

	return (
		<Container open={open}>
			<InputsContainer>
				{inputs.map(({ id, name, label, type }: Inputs) => {
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
