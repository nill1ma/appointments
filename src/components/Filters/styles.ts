import styled from "styled-components";

type ReferencesStyleProps = {
	isNext?: boolean;
	active?: boolean;
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 25vh;
	background-color: #2c2c2c;
	color: #ffffff;
	.refValueArea {
		width: 20%;
		padding-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		div {
			font-size: 1.5em;
		}
	}
`;

export const ReferencesList = styled.ul`
	margin: 0 auto;
	width: 10%;
	display: flex;
	justify-content: space-between;
`;

export const Item = styled.li<ReferencesStyleProps>`
	flex-grow: 1;
	list-style: none;
	cursor: pointer;
	padding: 10px 0;
	background-color: ${({ active }) => (active ? "#ffffff" : "")};
	color: ${({ active }) => (active ? "#2c2c2c" : "")};
	&:hover {
		font-weight: bold;
	}
`;

export const Direction = styled.button<ReferencesStyleProps>`
	cursor: pointer;
	height: 50px;
	width: 50px;
	border-radius: ${({ isNext }) => (isNext ? `0 50% 50% 0` : `50% 0 0 50%`)};
	background-color: #ffffff;
	border: none;
	color: #2c2c2c;
`;
