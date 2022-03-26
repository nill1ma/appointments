import styled from "styled-components";

type CardsContainerProps = {
	hasDetail: boolean;
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
	height: 75vh;
	border-right: 1px solid #2c2c2c;
	overflow-y: auto;
	::-webkit-scrollbar {
		width: 12px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px #2c2c2c;
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}
	/* Handle */
	::-webkit-scrollbar-thumb {
		-webkit-border-radius: 10px;
		border-radius: 10px;
		background: #363636;
		-webkit-box-shadow: inset 0 0 6px #2c2c2c;
	}
	::-webkit-scrollbar-thumb:window-inactive {
		background: #363636;
	}
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
`;
