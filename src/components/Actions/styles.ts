import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

type IconsProps = {
	visible: boolean;
};

export const Icons = styled.div<IconsProps>`
	display: ${({ visible }) => (visible ? "block" : "none")};
`;

export const Container = styled.div`
	width: calc(100% - 10px);
	display: flex;
	padding: 5px;
	div {
		font-size: 0.7em;
		padding-left: 5px;
		:nth-child(1) {
			padding-left: 0;
		}
	}
`;

export const Icon = styled(FontAwesomeIcon)`
	cursor: pointer;
`;
