import { IAppointment } from "../../models/appointments";
import {
	deleteAppointment,
	getAppointments,
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
			const index = state.data.findIndex(
				(dt: IAppointment) => dt.id === action.payload.id
			);
			deleteAppointment(index);
			return { data: [...state.data.slice(index, 1)] };
		default:
			return state;
	}
}

export { appointmentsReducer };
