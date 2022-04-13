import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 50%;
	flex-direction: column;
	align-items: center;
	span.title {
		font-weight: bold;
		background-color: #2f2f2f;
		color: #ffffff;
		border-top: 1px solid #fffff0;
		display: flex;
		justify-content: center;
		width: 96%;
		padding: 2%;
	}
	div {
		display: flex;
		width: 96%;
		padding: 2%;
		flex-direction: column;
		.period {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			font-size: 0.8em;
			span {
				margin-left: 10px;
			}
		}
		.description {
			display: flex;
			text-align: left;
			padding: 1%;
		}
	}
`;
