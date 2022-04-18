import { IAppointment } from "../../../models/appointments";

export type Action<T> = {
	type: string;
	payload: T;
};

export const addAppointment = (
	appointment: IAppointment
): Action<IAppointment> => ({
	type: "ADD_APPOINTMENT",
	payload: appointment,
});

export const deleteAppointment = (
	appointment: IAppointment
): Action<IAppointment> => ({
	type: "DELETE_APPOINTMENT",
	payload: appointment,
});
