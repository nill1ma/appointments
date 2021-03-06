import { IAppointment } from "../models/appointments";

export const getAppointments = (): IAppointment[] =>
	JSON.parse(localStorage.getItem(`appointments`) || `[]`);

export const getAppointmentById = (id: string) => {
	const appointments = getAppointments();
	const appointment = appointments.find((env: IAppointment) => env.id === id);
	return appointment;
};

export const getAppointmentDetail = () =>
	JSON.parse(localStorage.getItem(`appointmentDetail`) || `{}`);

export const setappointmentDetail = (detail: IAppointment) =>
	localStorage.setItem(`appointmentDetail`, JSON.stringify(detail));

export const saveAppointment = (appointment: IAppointment) => {
	const appointments = getAppointments();
	localStorage.setItem(
		`appointments`,
		JSON.stringify([...appointments, appointment])
	);
};

export const updateAppointment = (appointments: IAppointment[]) =>
	localStorage.setItem(`appointments`, JSON.stringify([...appointments]));

export const deleteAppointment = (appointments: IAppointment[]) => {
	localStorage.setItem(`appointments`, JSON.stringify([...appointments]));
};
