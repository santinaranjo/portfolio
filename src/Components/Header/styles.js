import styled from 'styled-components'

export const MainHeader = styled.header`
    background-color: rgb(200, 13, 80);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    & figure:first-child {
        display: flex;
        align-items: center;
        position: absolute;
        left: 10px;
        cursor: pointer;
        img {
            height: 30px;
            width: 30px;
            padding: 10px;
        }
    }
    & figure:nth-child(2) {
        display: flex;
        align-items: center;
        img {
            height: 40px;
            width: 40px;
            padding: 5px;
        }
    }
`
