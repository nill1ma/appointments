import { IAppointment } from "../models/appointments";

export const getAppointments = () =>
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

export const saveAppointment = (environment: IAppointment) => {
	const appointments = getAppointments();
	localStorage.setItem(
		`appointments`,
		JSON.stringify([...appointments, environment])
	);
};

export const deleteAppointment = (id: string) => {
	const appointments = getAppointments();
	const updatedAppointments = appointments.filter(
		(env: IAppointment) => env.id !== id
	);
	return updatedAppointments;
};
