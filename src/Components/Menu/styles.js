import styled from 'styled-components'

export const MenuCard = styled.section`
    display: flex;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 15px;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        list-style: none;
        width: 150px;
        border-radius: 20px;
        padding: 10px;
        border: 5px solid rgb(200, 13, 80);
        -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);
    }
    li {
        margin: 7px 0;
        border-bottom: 5px solid rgb(200, 13, 80);
        a {
            font-weight: bold;
            text-decoration: none;
            color: black;
        }
    }
`
