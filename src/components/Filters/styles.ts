import styled from "styled-components";
import { HeaderContainer } from "../Header/styles";

type ReferencesStyleProps = {
	isNext?: boolean;
	active?: boolean;
};

export const Container = styled(HeaderContainer)`
	.refValueArea {
		width: 20%;
		display: flex !important;
		flex-direction: row !important;
		justify-content: space-between;
		align-items: center;
		font-size: 1.5em;
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
