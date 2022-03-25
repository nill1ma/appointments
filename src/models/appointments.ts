export interface IAppointment {
	[key: string]: string;
	id: string;
	title: string;
	description: string;
	start: string;
	end: string;
}

export type InputAppointment = Omit<IAppointment, "start" | "end"> & {
	date_start: string;
	date_end: string;
	time_start: string;
	time_end: string;
};
