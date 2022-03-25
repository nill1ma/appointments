import { IAppointment } from "../../models/appointments";
import { Container } from "./styles";

type CardDetailProps = {
	detail: IAppointment;
	setDetail: (detail: IAppointment | undefined) => void;
};

export default function CardDetail({ detail, setDetail }: CardDetailProps) {
	return (
		<Container>
			<span onClick={() => setDetail(undefined)}>{detail.title}</span>
			<span>{detail.description}</span>
			<span>Start: {detail.start}</span>
			<span>End: {detail.end}</span>
		</Container>
	);
}
