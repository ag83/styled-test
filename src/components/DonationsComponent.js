import React, { Component } from "react";


export default class DonationsComponent extends Component {

    componentDidMount() {
        this.props.getDonations();
    }

    
    render() {
    
		return (
            <div >
                test
            </div>
		);
	}
}