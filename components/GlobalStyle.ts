import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`${css`
  :root {
    --color-background: hsl(217, 20%, 98%);
    --color-circle: hsl(217, 40%, 95%);
    --color-text: hsl(217, 20%, 19%);
    --color-primary: hsl(217, 90%, 50%);
    --color-primary-darker: hsl(217, 90%, 42%);
    --color-primary-dark: hsl(217, 90%, 25%);
    --color-white: #fff;

    --max-width: 1400px;

    --font-family-title: 'PT Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    line-height: 1.5;
    background-color: var(--color-background);
    color: var(--color-text);
  }

  @media (max-width: 768px) {
    html {
      font-size: 0.875em;
    }
  }

  body {
    margin: 0;
  }

  #__next {
    isolation: isolate;
  }
`}
`

export default GlobalStyle
