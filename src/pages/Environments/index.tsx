import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import { IEnvironments } from "../../models/environments";
import { getEnvironments, saveEnvironment } from "../../services/environments";
import { CardsContainer, Container } from "./styles";

export default function Environments() {
	const [environments, setEnvironments] = useState<IEnvironments[]>(
		getEnvironments()
	);

	const [open, setOpen] = useState<boolean>(false);

	const save = (environment: IEnvironments) => {
		const env = { ...environment, id: uuidv4() };
		setEnvironments([...environments, env]);
		saveEnvironment(env);
	};

	const handleOpenState = () => setOpen(!open);

	return (
		<Container>
			<div>
				<Button
					label={open ? `Keep it hidden` : `Create an Environment`}
					action={handleOpenState}
				/>
			</div>
			<CardsContainer>
				{environments.map((env: IEnvironments) => {
					return <></>;
				})}
			</CardsContainer>
		</Container>
	);
}

// motor: 1600
// mao de obra: 150
// bomba:300
// placa: 800

// total line:

// motor: 1500
// placa: 800
// bomba: 400
// 250
