import styled from "styled-components";

type FieldsProps = {
  hasPadding: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 10px 0;
  background-color: #2c2c2c;
  color: #ffffff;
  button {
      margin-top: 10px;
  }
`;

export const FieldsContainer = styled.div<FieldsProps>`
  display: flex;
  width: 100vw;
  padding-left: ${({ hasPadding }) => (hasPadding ? "10px" : "0")};
  label {
    display: flex;
    align-items: center;
    height: 30px;
  }
`;

export const InputText = styled.input.attrs({ tye: "text" })`
  padding: 10px;
  height: 30px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  height: 285px;
`;
export const FieldsArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding-left: 10px;
`;
