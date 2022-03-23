import styled from "styled-components";

type ButtonProps = {
  label: string;
  action: () => void;
  position?: string;
  bottom?: string;
  self_alignment?: string;
};

type ButtonStyleProps = {
  position?: string;
  bottom?: string;
  self_alignment?: string;
};
const ButtonStyle = styled.button<ButtonStyleProps>`
  padding: 10px;
  background-color: #00bfff;
  border: none;
  outline: none;
  cursor: pointer;
  position: ${({ position }) => position};
  bottom: ${({ bottom }) => bottom};
  align-self:  ${({ self_alignment }) => self_alignment};
  border-radius:10px;
`;

export default function Button({ label, action, position, bottom, self_alignment }: ButtonProps) {
  return (
    <ButtonStyle bottom={bottom} self_alignment={self_alignment} position={position} onClick={() => action()}>
      {label}
    </ButtonStyle>
  );
}
