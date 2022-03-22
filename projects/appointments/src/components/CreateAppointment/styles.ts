import styled from "styled-components";

type EventsProps = {
  open: boolean;
};

export const Container = styled.div<EventsProps>`
  transition: ${({ open }) => (open || !open) && "width 2s"};
  display: flex;
  flex-direction:column;
  min-height:20vh;
  max-height:20vh;
  color: #ffffff;
  padding: 10px;
  background-color: #2c2c2c;
  button{
      align-self:flex-start;
      margin-top:10px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  color: #ffffff;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
  input {
    width: 90%;
    padding: 10px;
  }
`;
