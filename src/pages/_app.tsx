import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: '#001F3F',
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background:  #43C5F4;
    margin: 0 auto;
    height: 100vh;
    font-family: 'Titillium Web', sans-serif;
    color: ${props => props.theme.niceBlack}; 
  }
  
  p {
     margin: 0;
  }
  
  a {
    text-decoration: none;
    &:hover {
    opacity: 0.7;
    }
  }
  ul {
    li {
      list-style: none;
    }
  }
  
  input {
     font-family: 'Titillium Web', sans-serif;
  }
  
  button {
     font-family: 'Titillium Web', sans-serif;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
     -webkit-appearance: none;
     margin: 0;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: inherit;
    -webkit-box-shadow: inherit;
    transition: background-color 5000s ease-in-out 0s;
    font-size: inherit;
  }
  
  input[type=number] {
     -moz-appearance: textfield;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Anyfin</title>
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
