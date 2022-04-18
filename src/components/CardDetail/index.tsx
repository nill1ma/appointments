import { IAppointment } from "../../models/appointments";
import { Container, Icon } from "./styles";
import { formatDate } from "../../utils/handle-date";
import { faEdit, faWindowClose } from "@fortawesome/free-solid-svg-icons";

type CardDetailProps = {
	detail: IAppointment;
	setDetail: (detail: IAppointment | undefined) => void;
};

export default function CardDetail({ detail, setDetail }: CardDetailProps) {
	return (
		<Container>
			<div className="title">
				<span data-testid={"close-area"}>{detail.title}</span>
				<div>
					<Icon icon={faEdit} />
					<Icon icon={faWindowClose} onClick={() => setDetail(undefined)} />
				</div>
			</div>
			<div>
				<div contentEditable="true" className="description">
					{detail.description}
				</div>
				<div className="period">
					<span>From: {formatDate(detail.start)}</span>
					<span>To: {formatDate(detail.end)}</span>
				</div>
			</div>
		</Container>
	);
}
