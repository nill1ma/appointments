import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconsProps = {
	color?: string;
};

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border: 1px solid #2c2c2c;
	cursor: pointer;
	width: 20%;
	min-width: 100px;
	height: 100px;
	padding: 5px;
	margin: 5px 0 0 5px;
	span:nth-child(1) {
		font-size: 0.8em;
	}
	div:nth-child(1) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		padding: 0;
	}
	div {
		align-self: flex-end;
		padding: 5%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: 0.7em;
	}
`;

export const Icon = styled(FontAwesomeIcon)<IconsProps>`
	align-self: flex-end;
	color: ${({ color }) => color};
`;
