import styled from "styled-components";

type CardContainerProps = {
	itIsWithin: boolean;
};

export const CardContainer = styled.div<CardContainerProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 1px solid #2c2c2c;
	background-color: ${({ itIsWithin }) => itIsWithin && "#87CEEB"};
	cursor: pointer;
	width: 20%;
	height: 100px;
	margin: 5px 0 0 5px;
	span:nth-child(1) {
		font-size: 0.8em;
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: 0.7em;
	}
`;
