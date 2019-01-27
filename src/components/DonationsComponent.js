import React, { Component } from "react";
import styled from 'styled-components';

import { cssConstants } from "../constants";
import Donation from "./Donation";

const DonationsContainer = styled.main`
    min-height: calc(100vh - ${cssConstants.headerHeight} - 160px);
    max-width: 1920px;
    margin: ${cssConstants.headerHeight} auto  0;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &::after {
        content: "";
        flex: ${props => props.grid? '300;' : '0'
    }
`;

const Loading = styled.div`
    text-align: center;
    margin: 20% auto;
    font-size: 2rem;
    color: grey;
`;
Loading.displayName = 'Loading';

const ErrorText = styled.div`
    text-align: center;
    margin: 20% auto;
    color: ${cssConstants.active};
`;
ErrorText.displayName = 'ErrorText';

export default class DonationsComponent extends Component {

    componentDidMount() {
        this.props.getDonations();
    }

    
    render() {
		return (
            <DonationsContainer grid ={this.props.donations? true : false}>
                {!this.props.loading? (
                    !this.props.error? 
                        this.props.donations && this.props.donations.map((donation) => {
                            return <Donation key={donation.id} {...donation}/>
                        })
                     : (
                        <ErrorText>{this.props.error}</ErrorText>
                    )
                ) : (<Loading>loading</Loading>)}
            </DonationsContainer>
		);
	}
}