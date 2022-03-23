export interface IAppointment {
  [key: string]: string | Date;
  id: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
}

export type InputAppointment = Omit<IAppointment, "start" | "end"> & {
	date_start: string;
	date_end: string;
	time_start: string;
	time_end: string;
  };