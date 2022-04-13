import styled from "styled-components";

export const ModalBackground = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(200, 200, 200, 0.9);
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalContent = styled.div`
	width: 40vw;
	border-radius: 12px;
	background-color: #ffffff;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;

	.actions {
		padding-top: 10px;
		width: 30%;
		display: flex;
		justify-content: space-around;
	}

	.close {
		display: flex;
		justify-content: flex-end;
	}
`;
