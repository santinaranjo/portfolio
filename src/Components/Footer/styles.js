import styled from 'styled-components'

export const MainFooter = styled.footer`
    background-color: rgb(200, 13, 80);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    margin-top: 25px;
    & figure:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 30px;
            width: 30px;
            padding: 5px;
        }
    }
`

export const SocialMedia = styled.section`
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
`
