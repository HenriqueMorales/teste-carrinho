import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-gray: #d1d8e5;
        --color-blue: #3b74f2;
        --color-light-green: #c7ffa6;
        --color-dark-green: #398d18;
    }

    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        list-style: none;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    html {
        font-size: 62.5%;
    }
    body {
        align-items: center;
        background: var(--color-gray);
        display: flex;
        justify-content: center;
        padding: 40px;
    }
`;
