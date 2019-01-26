import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { cssConstants } from "./constants";
import CharityContainer from "./containers/CharityContainer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #e2e2e2;
  }
`;
const Title = styled.h1`
    margin: 0;
    padding-left: 2rem;
    color: #fff;
    line-height: ${cssConstants.headerHeight};
`;

const Header = styled.header`
    height: ${cssConstants.headerHeight};
    background-color: ${cssConstants.primary};
    position: fixed;
    top: 0;
    width: 100%;
`;

const Footer = styled.footer`
    background-color: ${cssConstants.secondary};
    height: 160px;
    width: 100%;
`;

export default class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Header><Title>Last donations</Title></Header>
                <CharityContainer />
                <Footer></Footer>
            </>
        );
      }
};