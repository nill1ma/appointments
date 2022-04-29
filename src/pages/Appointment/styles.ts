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
	overflow-y: auto;
	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px #2c2c2c;
	}

	::-webkit-scrollbar-thumb {
		background: #363636;
		-webkit-box-shadow: inset 0 0 6px #2c2c2c;
	}
	::-webkit-scrollbar-thumb:window-inactive {
		background: #363636;
	}

	@media (max-width: 720px) {
		display: flex;
		align-items: center;
		width: 100%;
		border: none;
		padding-bottom: 5px;
		flex-wrap: nowrap;
		overflow-x: auto;
	}
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 75vh;
	@media (max-width: 720px) {
		flex-direction: column;
		height: auto;
	}
`;
