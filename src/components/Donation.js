import React, { Component } from "react";
import styled from 'styled-components';

import { cssConstants } from "../constants";

const DonationContainer = styled.article`
    background-color: white;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    @media only screen and ${cssConstants.media.mobileSmall} {
        margin: 1rem 0;
        width: calc(100% - 4rem);
    }
    @media only screen and ${cssConstants.media.mobile} {
        width: calc(50% - 4rem);
    }
    @media only screen and ${cssConstants.media.tablet} {
        width: calc(33% - 4rem);
    }
    @media only screen and ${cssConstants.media.laptop} {
        width: calc(25% - 4rem);
    }
    @media only screen and ${cssConstants.media.desktop} {
        width: calc(20% - 4rem);;
    }
`;

const DonorName = styled.h3`
    margin: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
`;
DonorName.displayName = 'DonorName';

const ImageContainer = styled.div`
    height: 4rem;
    width: 4rem;
    border-radius: 2rem;
    overflow: hidden;
    margin-bottom: 1rem;
    & > img {
            width: 100%;
            height: auto;
        }
`;
ImageContainer.displayName = 'ImageContainer';

const DonationAmount = styled.div`
    font-size: 2rem;
    margin-bottom: 1.5rem;
`;
DonationAmount.displayName = 'DonationAmount';

const DonationMessage = styled.div`
    font-style: italic;
    color: gray;
    margin-bottom: 1rem;
`;
DonationMessage.displayName = 'DonationMessage';

const DonationTime = styled.div`
    font-size: 0.8rem;
    color: gray;
`;
DonationTime.displayName = 'DonationTime';

export default class Donation extends Component {

    render() {
        return (
            <DonationContainer>
                <ImageContainer>
                    <img alt={this.props.donorDisplayName} src={this.props.imageUrl} />
                </ImageContainer>
                { this.props.amount && (
                    <DonationAmount>
                        {`${this.props.amount} ${this.props.donorLocalCurrencyCode}` }
                    </DonationAmount>
                    )
                }
                <DonationMessage>
                    {this.props.message}
                </DonationMessage>
                <DonorName>
                    {this.props.donorDisplayName}
                </DonorName>
                <DonationTime>
                    {this.props.date.toLocaleDateString("en-UK")}
                </DonationTime>
            </DonationContainer>
        ); 
    }
}