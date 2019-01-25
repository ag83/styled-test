import React, { Component } from 'react';

import CharityContainer from "./containers/CharityContainer";

export default class App extends Component {
    render() {
        return (
            <>
                <header className="ch-header"><h1 className="ch-header__logo">Last donations</h1></header>
                <CharityContainer />
            </>
        );
      }
};