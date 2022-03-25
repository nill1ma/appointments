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
	border: 1px solid red;
	display: flex;
	flex-wrap: wrap;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
`;
