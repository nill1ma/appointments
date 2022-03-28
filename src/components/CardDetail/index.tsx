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
			<span data-testid={"close-area"} onClick={() => setDetail(undefined)}>
				{detail.title}
			</span>
			<span>{detail.description}</span>
			<span>Start: {formatDate(detail.start)}</span>
			<span>End: {formatDate(detail.end)}</span>
		</Container>
	);
}
