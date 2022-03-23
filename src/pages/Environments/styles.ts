import styled from "styled-components"

export const Container = styled.div`
    // display:flex;
    // flex-direction: column;
    // width:100vw;
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:30vh 70vh;
`

export const CardsContainer = styled.div`
    display:flex;
    border:1px solid red;
    flex-wrap: wrap;
    justify-content: space-around;
    width:100%;
`