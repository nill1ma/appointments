import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Actions from "../../components/Actions";
import Card from "../../components/Card";
import CardDetail from "../../components/CardDetail";
import CreateAppointment from "../../components/CreateAppointment";
import Filters from "../../components/Filters";
import Message from "../../components/Message";
import UserInfo from "../../components/UserInfo";
import { messages } from "../../helpers/constants";
import { IAppointment } from "../../models/appointments";
import { References } from "../../models/filters-references";
import { Users } from "../../models/users";
import { saveAppointment } from "../../services/appointments";
import { RootState } from "../../stores/reducers";

import {
	addAppointment,
	deleteAppointment
} from "../../stores/reducers/actions/appointments";
import { AppointmentsPayload } from "../../stores/reducers/appointments";
import { CardsContainer, Container, Content } from "./styles";

type AppointmentsProps = {
	user: Users;
};

type CurrentAppointments = IAppointment & { selected?: boolean }

export default function Appointment({ user }: AppointmentsProps) {
	const [isItFiltering, setIsItFiltering] = useState<boolean>(false);

	const { data }: AppointmentsPayload = useSelector(
		(state: RootState) => state.appointments
	);

	const dispatch = useDispatch();

	const [appointments, setAppointments] = useState<CurrentAppointments[]>(data);
	const [enableToSelectToDelete, setEnableToSelectToDelete] = useState<boolean>(false)

	useEffect(() => {
		setAppointments(data);
	}, [data]);

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

	const handleIsItFiltering = () => {
		setIsItFiltering(prev => !prev)
	}

	const handleSetEnableToSelectToDelete = () => setEnableToSelectToDelete(prev => !prev)

	const deleteSelectedAppopintments = () => {
		console.log('deleting')
	}

	const filterAppointments = (references: References) => {
		const allAppointments: IAppointment[] = data;
		const filteredAppointments = allAppointments.filter((app: IAppointment) => {
			const { reference } = references;
			const date = new Date(app.start);
			// const result = compareReferences(type, d, String(value));
			const result = date.getFullYear() === reference;
			return result;
		});
		setAppointments([...filteredAppointments]);
	};

	const selectAppointmentToDelete = (id: string) => {
		setAppointments((previous: CurrentAppointments[]) => {
			return [...previous.map((prev: CurrentAppointments) => {
				prev.id === id && (prev.selected = !prev.selected)
				return prev
			})]
		})
	}

	// const compareReferences = (type: string, filter: Date, reference: string) => {
	// 	switch (type) {
	// 		case "MONTH":
	// 			return `${filter.getMonth() + 1}` === reference;
	// 		default:
	// 			return String(filter.getFullYear()) === reference;
	// 	}
	// };

	const removeCard = (appointment: IAppointment) => {
		dispatch(deleteAppointment(appointment));
	};

	return (
		<Container>
			<UserInfo avatar={user.avatar} name={user.name} />
			<>
				{isItFiltering ? (
					<CreateAppointment isOpened={isItFiltering} action={save} />
				) : (
					<Filters handleCurrentPeriod={filterAppointments} />
				)}
			</>
			<Content>
				<Actions
					handleFilter={handleIsItFiltering}
					isItFiltering={isItFiltering}
					setEnableToSelectToDelete={handleSetEnableToSelectToDelete}
					enableToSelectToDelete={enableToSelectToDelete}
					deleteSelectedAppopintments={deleteSelectedAppopintments}
				/>
				<CardsContainer hasDetail={detail !== undefined}>
					{appointments.length < 1 ? (
						<Message
							type="info"
							message={messages.info.NO_APPOINTMENT_FOR_THIS_FILTER}
						/>
					) : (
						appointments.map((appointment: IAppointment) => {
							return (
								<Card
									itIsPastEvent={new Date().getTime() > new Date(appointment.end).getTime()}
									removeCard={removeCard}
									key={appointment.id}
									item={appointment}
									setDetail={setDetail}
									enableToSelectToDelete={enableToSelectToDelete}
									selectAppointmentToDelete={selectAppointmentToDelete}
								/>
							);
						})
					)}
				</CardsContainer>
				{detail && <CardDetail detail={detail} setDetail={setDetail} />}
			</Content>
		</Container>
	);
}
