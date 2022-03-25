import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 50%;
	flex-direction: column;
	align-items: center;
	span:nth-child(1) {
		font-weight: bold;
		color: #fff;
		background-color: #2d2d2d;
		display: flex;
		justify-content: center;
		width: 96%;
		border: 1px solid #2c2c2c;
		padding: 2%;
	}
	span:nth-child(2) {
		width: 50%;
		text-align: left;
	}
`;
