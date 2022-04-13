import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 50%;
	flex-direction: column;
	align-items: center;
	span:nth-child(0) {
		font-weight: bold;
		color: #fff;
		display: flex;
		justify-content: center;
		width: 96%;
		padding: 2%;
	}
	div {
		display: flex;
		flex-direction: column;
	}
`;
