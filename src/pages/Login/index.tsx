import { AdaptedIcon, Button, Container, Header, Icon } from "./styles";
import * as api from "../../firebase/api";

type LoginProps = {
	onReceiveGoogle: (u: any) => void;
};

export default function Login({ onReceiveGoogle }: LoginProps) {
	const actionLoginGoogle = async () => {
		let { user } = await api.googleSignIn();
		if (user) {
			onReceiveGoogle(user);
		} else {
			alert("Error");
		}
	};
	return (
		<Container>
			<Header>
				<h2>Appointments</h2>
				<h5>Don't forget your appointments anymore</h5>
			</Header>
			<Button onClick={actionLoginGoogle}>
				<span>Sign in with Google account</span>
				<AdaptedIcon>G</AdaptedIcon>
			</Button>
		</Container>
	);
}
