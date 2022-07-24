import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`${css`
  :root {
    --color-background-hsl: 217 20% 98%;
    --color-background: hsl(var(--color-background-hsl));
    --color-circle: hsl(217deg 40% 95%);
    --color-text: hsl(217deg 20% 19%);
    --color-primary: hsl(217deg 90% 50%);
    --color-primary-darker: hsl(217deg 90% 42%);
    --color-primary-dark: hsl(217deg 90% 25%);
    --color-white: #fff;
    --color-shadow-hsl: 210deg 5% 62%;

    --max-width: 1400px;

    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    --font-family-title: 'PT Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;

    --border-radius-sm: 0.25rem;
    --border-radius-md: 0.375rem;
    --border-radius-lg: 0.625rem;

    --shadow-md: 0.3px 0.5px 0.7px hsl(var(--color-shadow-hsl) / 0.21),
      0.8px 1.6px 2.1px -0.7px hsl(var(--color-shadow-hsl) / 0.23),
      1.9px 3.7px 5px -1.3px hsl(var(--color-shadow-hsl) / 0.26),
      4.3px 8.7px 11.6px -2px hsl(var(--color-shadow-hsl) / 0.29);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-background-hsl: 217 20% 8%;
      --color-circle: hsl(217deg 40% 5%);
      --color-text: hsl(217deg 20% 85%);
      --color-primary: hsl(217deg 90% 53%);
      --color-primary-darker: hsl(217deg 90% 60%);
      --color-primary-dark: hsl(217deg 90% 65%);
      --color-white: hsl(217deg 20% 2%);
      --color-shadow-hsl: 218 33% 1%;
    }
  }

  html {
    font-family: var(--font-family);
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

  .dark-only {
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    .dark-only {
      display: block;
    }

    .light-only {
      display: none;
    }
  }
`}
`

export default GlobalStyle
