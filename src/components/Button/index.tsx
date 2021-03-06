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
	position: ${({ position }) => position};
	bottom: ${({ bottom }) => bottom};
	right: ${({ right }) => right};
	align-self: ${({ self_alignment }) => self_alignment};
	border-radius: ${({ borderRadius }) =>
		borderRadius ? borderRadius : `10px`};
	cursor: pointer;
	@media (max-width: 720px) {
		width: ${({ right }) => (right ? "auto" : "50%")};
		padding: 5px;
		right: unset;
		margin:0 auto;
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
