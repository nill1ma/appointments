import styled from "styled-components";

type CardsContainerProps = {
	hasDetail?: boolean;
	isOpened?: boolean;
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
`;

export const CardsContainer = styled.div<CardsContainerProps>`
	width: ${({ hasDetail }) => (hasDetail ? `50%` : `100%`)};
	display: flex;
	flex-wrap: wrap;
	border-right: 1px solid #2c2c2c;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px #2c2c2c;
	}
	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #363636;
		-webkit-box-shadow: inset 0 0 6px #2c2c2c;
	}
	::-webkit-scrollbar-thumb:window-inactive {
		background: #363636;
	}
`;

export const Content = styled.div<CardsContainerProps>`
	width: 100%;
	display: flex;
	height: ${({ isOpened }) => (isOpened ? "75vh" : "100vh")};
`;
