import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

type SignInOrSignOutOProps = {
	active: boolean;
};

export const Container = styled.div`
	margin: 0 auto 0 auto;
	width: 100vw;
	height: calc(80vh - 10px);
	padding: 5px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button`
	padding: 10px;
	width: 220px;
	border: 2px solid #2c2c2c;
	border-radius: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #ffffff;
`;

export const AdaptedIcon = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	border: 1px solid #2c2c2c;
`;

export const InputsArea = styled.div`
	display: flex;
	flex-direction: column;
	width: 220px;
	.form-group {
		display: flex;
		flex-direction: column;
	}
	button {
		padding: 5px;
		width: calc(50% - 10px);
		align-self: flex-end;
		margin-top: 5px;
		background-color: #00bfff;
		border: none;
		cursor: pointer;
	}
`;

export const Input = styled.input`
	padding: 10px;
	border: 1px solid #2c2c2c;
	outline: none;
	width: calc(100% - 22px);
`;

export const SignInOrSignUp = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SignInOrSignUpItem = styled.span<SignInOrSignOutOProps>`
	width: 50%;
	display: flex;
	justify-content: center;
	cursor: pointer;
	padding: 5px 0;
	background-color: ${({ active }) => (active ? "#2c2c2c" : "")};
	color: ${({ active }) => (active ? "#fffccc" : "#2c2c2c")};
`;

export const Icon = styled(FontAwesomeIcon)``;
