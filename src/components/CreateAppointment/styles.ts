import styled from "styled-components";
import { HeaderContainer } from "../Header/styles";

type EventsProps = {
	open: boolean;
};
type InputController = {
	type: string;
};

export const Container = styled(HeaderContainer)<EventsProps>`
	transition: ${({ open }) => (open || !open) && "width 2s"};
	button {
		align-self: flex-start;
		margin-top: 10px;
	}
`;

export const InputsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	color: #ffffff;
	align-items: space-between;
	width: 100%;
	@media (max-width: 720px) {
		display: flex;
		flex-direction: column;
		color: #ffffff;
		width: 100%;
	}
`;

export const InputArea = styled.div<InputController>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: ${({ type }) => (type === "text" ? "30%" : "20%")};
	input {
		padding: ${({ type }) => (type === "text" ? "10px" : "7px")};
		width: 90%;
	}

	@media (max-width: 720px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #ffffff;
		width: 100%;
		input {
			padding: ${({ type }) => (type === "text" ? "7px" : "5px")};
		}
	}
`;
