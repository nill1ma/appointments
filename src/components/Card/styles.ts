import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardContainerProps = {
	itIsWithin: boolean;
};

export const CardContainer = styled.div<CardContainerProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border: 1px solid #2c2c2c;
	background-color: ${({ itIsWithin }) => itIsWithin && "#87CEEB"};
	cursor: pointer;
	width: 20%;
	height: 100px;
	padding: 5px;
	margin: 5px 0 0 5px;
	span:nth-child(1) {
		font-size: 0.8em;
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

export const Icon = styled(FontAwesomeIcon)`
	align-self: flex-end;
`;
