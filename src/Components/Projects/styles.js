import styled from 'styled-components'

export const MyProjects = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    .project-container {
        width: 100%;
        max-width: 800px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    }
    figure {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        max-height: 400px;
        height: fit-content;
        overflow: hidden;
    }
    img {
        width: 300px;
        height: auto;
    }
    .project-card {
        border: 5px solid rgb(200, 13, 80);
        border-radius: 20px;
        overflow: hidden;
        height: fit-content;
    }
    .project-title {
        font-weight: bold;
        color: white;
        background-color: rgb(200, 13, 80);
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .project-tech {
            span {
                background-color: white;
                color: black;
                padding: 5px;
                border-radius: 20px;
                margin-left: 5px;
            }
        }
    }
    .project-link {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
        a {
            text-decoration: none;
            color: white;
            background-color: rgb(50, 100, 200);
            padding: 10px;
            border-radius: 20px;
            font-weight: bold;
        }
    }
`
