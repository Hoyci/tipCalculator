import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        font-size: 62.5%;
        background-color: var(--cyan-grayish-light);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Space Mono', monospace;
        font-weight: 700;
    }
    
    :root {
        --cyan-strong: hsl(172, 67%, 45%);
        --cyan-dark: hsl(183, 100%, 15%);
        --cyan-dark-grayish: hsl(186, 14%, 43%);
        --cyan-grayish: hsl(184, 14%, 56%);
        --cyan-grayish-light: hsl(185, 41%, 84%);
        --cyan-grayish-very-light: hsl(189, 41%, 97%);
        --white: hsl(0, 0%, 100%);
        --border-radius: 6px;
    }
`