import { useState } from "react";
import * as api from "../../firebase/api";
import {
	AdaptedIcon,
	Button,
	Container,
	Header,
	Input,
	InputsArea,
	SignInOrSignUp,
	SignInOrSignUpItem
} from "./styles";

type LoginProps = {
	onReceiveGoogle: (u: any) => void;
};

type InputField = {
	label: string
	name: string
	type: string
	active?: boolean
}


type CreateAccountOtSignIn = {
	label: string
	active: boolean
}

export default function Login({ onReceiveGoogle }: LoginProps) {
	const [createAccountOtSignIn, setCreateAccountOtSignIn] = useState<CreateAccountOtSignIn[]>([
		{ label: 'Sign In', active: true },
		{ label: 'Sign Up', active: false },
	])
	const inputFields: InputField[] = [
		{ label: "Name", name: "name", type: "text", active: createAccountOtSignIn[0].active },
		{ label: "Username", name: "username", type: "text" },
		{ label: "Password", name: "password", type: "password" },
	];

	const actionLoginGoogle = async () => {
		let { user } = await api.googleSignIn();
		if (user) {
			onReceiveGoogle(user);
		} else {
			alert("Error");
		}
	};

	const handleSignInOrSignUp = (label: string) => {
		setCreateAccountOtSignIn((previous: CreateAccountOtSignIn[]) => {
			return [...previous.map((prev: CreateAccountOtSignIn) => {
				prev.active = label === prev.label
				return prev
			})]
		})
	}
	return (
		<Container>
			<Header>
				<h2>Appointments</h2>
				<h5>Don't forget your appointments anymore</h5>
			</Header>
			<InputsArea>
				<SignInOrSignUp>
					{createAccountOtSignIn.map((item: CreateAccountOtSignIn) =>
						<SignInOrSignUpItem key={item.label} onClick={() => handleSignInOrSignUp(item.label)} active={item.active}>{item.label}</SignInOrSignUpItem>
					)}
				</SignInOrSignUp>
				{inputFields.map((field) => {
					return (
						<div key={field.name} className="form-group">
							<label style={{ color: field.active ? '#cccccc' : '' }} htmlFor="">{field.label}</label>
							<Input disabled={field.active} name={field.name} type={field.type} />
						</div>
					);
				})}
				<button>Login</button>

			</InputsArea>

			<Button onClick={actionLoginGoogle}>
				<span>Sign in with Google account</span>
				<AdaptedIcon>G</AdaptedIcon>
			</Button>
		</Container>
	);
}
