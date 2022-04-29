import { IAppointment } from "../../models/appointments";
import {
	deleteAppointment,
	getAppointments,
	updateAppointment,
} from "../../services/appointments";
import { Action } from "./actions/appointments";

export type AppointmentsPayload = {
	data: IAppointment[];
};

const INITIAL_STATE: AppointmentsPayload = {
	data: [...getAppointments()],
};

function appointmentsReducer(
	state: AppointmentsPayload = INITIAL_STATE,
	action: Action<IAppointment>
) {
	switch (action.type) {
		case "ADD_APPOINTMENT":
			return { data: [...state.data, action.payload] };
		case "DELETE_APPOINTMENT":
			const appointments = state.data.filter(
				({ id }: IAppointment) => id !== action.payload.id
			);
			deleteAppointment(appointments);
			return { data: [...appointments] };
		case "UPDATE_APPOINTMENT":
			const index = state.data.findIndex(
				(item) => item.id === action.payload.id
			);
			state.data[index] = action.payload;
			updateAppointment(state.data);
			return { data: [...state.data] };
		default:
			return state;
	}
}

function removeAppointmentsInBatch(
	appointments: IAppointment[],
	appointmentsToRemove: IAppointment[]
): IAppointment[] {
	let currentAppointments: IAppointment[] = [];
	for (let toRemove of appointmentsToRemove)
		currentAppointments = [
			...appointments.splice(
				appointments.findIndex(
					(appointment: IAppointment) => appointment.id === toRemove.id
				),
				1
			),
		];
	return currentAppointments;
}

export { appointmentsReducer };
