import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Input = styled.input.attrs({ type: "text" })`
	padding: 10px;
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

export const Icon = styled(FontAwesomeIcon)``;
