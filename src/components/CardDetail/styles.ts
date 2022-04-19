import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
	display: flex;
	width: 50%;
	flex-direction: column;
	align-items: center;
	.title {
		font-weight: bold;
		background-color: #2c2c2f;
		color: #ffffff;
		border-top: 1px solid #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 95%;
		padding: 2%;
		div {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			width: 10%;
		}

		input {
			background-color: #2c2c2c;
			border: none;
			color: #ffffff;
			outline: none;
			border-bottom: 1px solid #ffffff;
			padding: 9px 0;
		}
	}
	textarea {
		min-width: 100%;
		max-width: 100%;
		padding: 2% 0;
		outline: none;
		border: none;
		border-bottom: 1px solid #2c2c2c;
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

export const Icon = styled(FontAwesomeIcon)`
	cursor: pointer;
`;
