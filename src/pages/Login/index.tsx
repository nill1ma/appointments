import * as api from "../../firebase/api";
import {
	AdaptedIcon,
	Button,
	Container,
	Header,
	Input,
	InputsArea,
} from "./styles";

type LoginProps = {
	onReceiveGoogle: (u: any) => void;
};

export default function Login({ onReceiveGoogle }: LoginProps) {
	const inputFields = [
		{ label: "Username", name: "username", type: "text" },
		{ label: "Password", name: "password", type: "password" },
	];

	// const [user, setUser] = useState<Users>({} as Users);

	const actionLoginGoogle = async () => {
		let { user } = await api.googleSignIn();
		if (user) {
			onReceiveGoogle(user);
		} else {
			alert("Error");
		}
	};
	// const handleUser = (event: ChangeEvent<HTMLInputElement>) => {
	// 	const { name, value } = event.target;
	// 	setUser((previous: Users) => {
	// 		return { ...previous, [name]: value };
	// 	});
	// };
	return (
		<Container>
			<Header>
				<h2>Appointments</h2>
				<h5>Don't forget your appointments anymore</h5>
			</Header>
			<InputsArea>
				{inputFields.map((field) => {
					return (
						<div key={field.name} className="form-group">
							<label htmlFor="">{field.label}</label>
							<Input name={field.name} type={field.type} />
						</div>
					);
				})}
			</InputsArea>

			<Button onClick={actionLoginGoogle}>
				<span>Sign in with Google account</span>
				<AdaptedIcon>G</AdaptedIcon>
			</Button>
		</Container>
	);
}
