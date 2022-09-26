import styled from 'styled-components'

export const Presentation = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    font-weight: bold;
    margin-top: 30px;
    & p:first-child {
        line-height: 1.5;
        margin: 10px;
        padding: 10px;
        .first-line {
            border-bottom: 5px solid rgb(240, 240, 240);
        }
        .second-line {
            border-bottom: 5px solid rgb(200, 13, 80);
        }
        .third-line {
            border-bottom: 5px solid rgb(116, 10, 48);
        }
    }
`

export const FotoPersonal = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    img {
        width: 200px;
        height: auto;
    }
`

export const MisTrabajos = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 23px;
    font-weight: bold;
    & p:first-child {
        justify-self: center;
        background-color: rgb(200, 13, 80);
        color: white;
        padding: 10px;
        border-radius: 20px;
        width: fit-content;
    }
`

export const Main = styled.main`
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`
