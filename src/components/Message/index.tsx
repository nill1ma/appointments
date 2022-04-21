import styled from "styled-components";

type MessageContainerProps = {
	type: string;
};

type Colors = {
	[key: string]: string;
};

const backgroundColors: Colors = {
	info: "#00FFFF",
	warn: "#FFD700",
	error: "#FF4500",
};

export const MessageContainer = styled.div<MessageContainerProps>`
	margin: auto;
	padding: 10px;
	background-color: ${({ type }) => backgroundColors[type]};
	border-radius: 10px;
	font-weight: bold;
	border: none;
`;

type MessagesProps = {
	message: string;
	type: "info" | "warn" | "error";
};

export default function Message({ message, type }: MessagesProps) {
	return <MessageContainer type={type}>{message}</MessageContainer>;
}
