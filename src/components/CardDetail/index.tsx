import {
	faEdit,
	faSave,
	faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { IAppointment } from "../../models/appointments";
import { updateAppointment } from "../../stores/reducers/actions/appointments";
import { formatDate } from "../../utils/handle-date";
import { Container, Icon } from "./styles";

type CardDetailProps = {
	detail: IAppointment;
	setDetail: (detail: IAppointment | undefined) => void;
};

export default function CardDetail({ detail, setDetail }: CardDetailProps) {
	const [isEditable, setIsEditable] = useState(false);
	const [appointment, setAppointment] = useState<IAppointment>(detail);
	const dispatch = useDispatch();

	const editAppointment = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		console.log(value, " valueeee");
		setAppointment((previous: IAppointment) => {
			return { ...previous, [name]: value };
		});

		console.log(appointment, " -> Editing Appointment");
	};

	const save = () => {
		dispatch(updateAppointment(appointment));
		setIsEditable(false);
	};

	return (
		<Container>
			<div className="title">
				{isEditable ? (
					<input
						type="text"
						name="title"
						value={appointment.title}
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							editAppointment(event)
						}
					/>
				) : (
					<span
						id="title"
						contentEditable={isEditable}
						data-testid={"close-area"}
					>
						{appointment.title}
					</span>
				)}
				<div>
					{isEditable ? (
						<Icon onClick={save} icon={faSave} />
					) : (
						<Icon onClick={() => setIsEditable(!isEditable)} icon={faEdit} />
					)}
					<Icon icon={faWindowClose} onClick={() => setDetail(undefined)} />
				</div>
			</div>
			<div>
				{isEditable ? (
					<textarea
						name="description"
						value={appointment.description}
						onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
							editAppointment(event)
						}
					></textarea>
				) : (
					<div
						contentEditable={isEditable}
						id="description"
						className="description"
					>
						{appointment.description}
					</div>
				)}
				<div className="period">
					{isEditable ? (
						<>
							<input
								onChange={(event: ChangeEvent<HTMLInputElement>) =>
									editAppointment(event)
								}
								name="start"
								type="datetime-local"
								value={appointment.start}
							/>
							<input
								onChange={(event: ChangeEvent<HTMLInputElement>) =>
									editAppointment(event)
								}
								name="end"
								type="datetime-local"
								value={appointment.end}
							/>
						</>
					) : (
						<>
							<span>From: {formatDate(appointment.start)}</span>
							<span>To: {formatDate(appointment.end)}</span>
						</>
					)}
				</div>
			</div>
		</Container>
	);
}
