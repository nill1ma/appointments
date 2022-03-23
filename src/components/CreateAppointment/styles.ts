import styled from "styled-components";

type EventsProps = {
	open: boolean;
};
type InputController = {
	type: string;
};

export const Container = styled.div<EventsProps>`
	transition: ${({ open }) => (open || !open) && "width 2s"};
	display: flex;
	flex-direction: column;
	color: #ffffff;
	padding: 10px;
	background-color: #2c2c2c;
	button {
		align-self: flex-start;
		margin-top: 10px;
	}
`;

export const InputsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	color: #ffffff;
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
`;
