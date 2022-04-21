import styled from "styled-components";

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	height: 20vh;
	background-color: #2c2c2c;
	padding: 0 10px;

	@media (max-width: 720px) {
		height: auto;
		padding: 10px;
	}
`;
