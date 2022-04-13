import { IAppointment } from "../../models/appointments";
import { Container } from "./styles";
import { formatDate } from "../../utils/handle-date";

type CardDetailProps = {
	detail: IAppointment;
	setDetail: (detail: IAppointment | undefined) => void;
};

export default function CardDetail({ detail, setDetail }: CardDetailProps) {
	return (
		<Container>
			<span
				className="title"
				data-testid={"close-area"}
				onClick={() => setDetail(undefined)}
			>
				{detail.title}
			</span>
			<div>
				<span className="description">{detail.description}</span>
				<div className="period">
					<span>From: {formatDate(detail.start)}</span>
					<span>To: {formatDate(detail.end)}</span>
				</div>
			</div>
		</Container>
	);
}
