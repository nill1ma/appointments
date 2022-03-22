import styled from "styled-components";

type CardContainerProps = {
    isItToday: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content:center;
    border:1px solid #2C2C2C;
    background-color: ${({isItToday})=> isItToday && '#87CEEB'};
    cursor:pointer;
    width:20%;
    height:100px;
    margin:10px 0 0 10px;
`