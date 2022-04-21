import styled from "styled-components";

type ButtonProps = {
	label: string;
	action: () => void;
	position?: string;
	bottom?: string;
	right?: string;
	self_alignment?: string;
	borderRadius?: string;
};

type ButtonStyleProps = {
	position?: string;
	bottom?: string;
	right?: string;
	self_alignment?: string;
	borderRadius?: string;
};
const ButtonStyle = styled.button<ButtonStyleProps>`
	padding: 10px;
	background-color: #00bfff;
	border: none;
	outline: none;
	cursor: pointer;
	position: ${({ position }) => position};
	bottom: ${({ bottom }) => bottom};
	right: ${({ right }) => right};
	align-self: ${({ self_alignment }) => self_alignment};
	border-radius: ${({ borderRadius }) =>
		borderRadius ? borderRadius : `10px`};
	@media (max-width: 720px) {
		width: ${({ right }) => (right ? "30%" : "100%")};
		padding: 0;
		right: unset;
	}
`;

export default function Button({
	label,
	action,
	position,
	bottom,
	right,
	self_alignment,
	borderRadius,
}: ButtonProps) {
	return (
		<ButtonStyle
			bottom={bottom}
			self_alignment={self_alignment}
			position={position}
			right={right}
			onClick={() => action()}
			borderRadius={borderRadius}
		>
			{label}
		</ButtonStyle>
	);
}
