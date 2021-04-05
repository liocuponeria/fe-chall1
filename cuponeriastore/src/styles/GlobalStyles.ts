import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

:root {

    /* FONTS */
    --primary-font: 'Roboto', sans-serif;

    /* COLORS */
    --color-background: #f2f2f2;
    --color-black: #111111;
    --color-white: #ffffff;
    --color-yellow: #FAD424;
    --color-yellow-hover: #ebc410;
    --color-pink: rgb(244, 228, 228);
    --color-pink-dark: #EE797E;
    --color-pink-hover: #eb6368;
    --color-blue: #d9e5e5;
    --color-blue-dark: #619CEB;
    --color-blue-hover: #428bed;
    --color-grey: #A8A4A4;
    --color-red: #FF0000;

    /* BORDERS */
    --primary-border: 7px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    
    font-family: var(--primary-font);
    background-color: var(--color-background);
}
*, button, input {
    border: 0;
    background: none;
    font-family: var(--primary-font);
}
button {
    outline: 0;
    border-radius: var(--primary-border);
    cursor: pointer;
}
`;