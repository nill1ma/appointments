export interface IAppointment {
	[key: string]: string;
	id: string;
	title: string;
	description: string;
	date_start: string;
	time_start: string;
	time_end: string;
}
