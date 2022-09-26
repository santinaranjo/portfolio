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

        .first-line {
            border-bottom: 5px solid rgb(240, 240, 240);
        }
        .second-line {
            border-bottom: 5px solid rgb(14, 118, 168);
        }
    }
    & p a {
        text-decoration: none;
        color: white;
        background-color: rgb(14, 118, 168);
        padding: 5px;
        border-radius: 20px;
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
