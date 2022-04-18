import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardDetail from "../../components/CardDetail";
import CreateAppointment from "../../components/CreateAppointment";
import Filters from "../../components/Filters";
import UserInfo from "../../components/UserInfo";
import { IAppointment } from "../../models/appointments";
import { References } from "../../models/filters-references";
import { Users } from "../../models/users";
import { getAppointments, saveAppointment } from "../../services/appointments";
import { RootState } from "../../stores/reducers";
import {
	addAppointment,
	deleteAppointment,
} from "../../stores/reducers/actions/appointments";
import { AppointmentsPayload } from "../../stores/reducers/appointments";
import { CardsContainer, Container, Content } from "./styles";

type AppointmentsProps = {
	user: Users;
};

export default function Appointment({ user }: AppointmentsProps) {
	const [isOpened, setIsOpened] = useState<boolean>(false);

	const { data }: AppointmentsPayload = useSelector(
		(state: RootState) => state.appointments
	);

	const dispatch = useDispatch();

	const [detail, setDetail] = useState<IAppointment>();

	const save = (currentAppointment: IAppointment) => {
		const { start, end } = currentAppointment;
		const appointment: IAppointment = {
			...currentAppointment,
			id: uuidv4(),
			start: `${start}:00`,
			end: `${end}:59`,
		};

		saveAppointment(appointment);
		dispatch(addAppointment(appointment));
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
		// setAppointments([...filteredAppointments]);
	};

	const compareReferences = (type: string, filter: Date, reference: string) => {
		switch (type) {
			case "MONTH":
				return `${filter.getMonth() + 1}` === reference;
			default:
				return String(filter.getFullYear()) === reference;
		}
	};

	const removeCard = (appointment: IAppointment) => {
		dispatch(deleteAppointment(appointment));
	};

	return (
		<Container>
			<UserInfo avatar={user.avatar} name={user.name} />
			<>
				{isOpened ? (
					<CreateAppointment isOpened={isOpened} action={save} />
				) : (
					<Filters handleCurrentPeriod={filterAppointments} />
				)}
			</>
			<Content>
				<CardsContainer hasDetail={detail !== undefined}>
					{data &&
						data.map((appointment: IAppointment) => {
							return (
								<Card
									removeCard={removeCard}
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
				label={isOpened ? `Filter` : `Create an Appointment`}
				action={handleOpenedState}
			/>
		</Container>
	);
}
