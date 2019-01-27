import React from 'react'
import { shallow, mount } from 'enzyme';

import Donation from"./Donation";
import DonationsComponent from"./DonationsComponent";

let donations = [
    {
        amount: 55,
        currencyCode: "GBP",
        date: new Date('11/01/2019'),
        donorDisplayName: "Susan Thompson",
        donorLocalAmount: 55,
        donorLocalCurrencyCode: "GBP",
        id: 20,
        imageUrl: "https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif",
        message: "Remembering my mum, Mary",
    },
    {
        amount: 220,
        currencyCode: "GBP",
        date: new Date('22/12/2018'),
        donorDisplayName: "Richard Foulkes",
        donorLocalAmount: 220,
        donorLocalCurrencyCode: "GBP",
        id: 23,
        imageUrl: "https://images.justgiving.com/image/74e2e6e3-08f8-48f9-98f7-8ed2aab65250.jpg?template=profilesummary",
        message: "Money Raised from the Deutsche Bank GTB Xmas Jumper Day.",
    }
]

describe('DonationsComponent', ()=>{

    let charityData ={
        donations: null,
        loading: false,
        error: "",
        getDonations: jest.fn()
    }


    let wrapper;

    beforeEach(()=>{
        wrapper = mount(<DonationsComponent {...charityData}/>);
    });

    it("should render DonationsComponent", () => {
        expect(wrapper.length).toEqual(1)
    });

    it("should call getDonations", () => {
        charityData.getDonations.mockClear();
        wrapper = shallow(<DonationsComponent {...charityData}/>);
        expect(charityData.getDonations).toHaveBeenCalledTimes(1);
    });

    it("should render loading", () => {
        charityData.loading = true;
        wrapper = shallow(<DonationsComponent {...charityData}/>);
        expect(wrapper.find('Loading')).toHaveLength(1);
    });

    it("should render error", () => {
        let error = 'Error text';
        charityData.loading = false;
        charityData.error = error;
        wrapper = shallow(<DonationsComponent {...charityData}/>);
        expect(wrapper.find('ErrorText')).toHaveLength(1);
        expect(wrapper.find('ErrorText').text()).toEqual(error);
    });

    it("should render donations", () => {
        charityData.error = "";
        charityData.donations = donations;
        wrapper = shallow(<DonationsComponent {...charityData}/>);
        expect(wrapper.find(Donation)).toHaveLength(2);
    });

});


describe('Donation', ()=>{

    let data = donations[0];

    let wrapper;

    beforeEach(()=>{
        wrapper = mount(<Donation {...data}/>);
    });

    it("should render Donation", () => {
        expect(wrapper.length).toEqual(1)
    });


    it("should render donor name", () => {
        wrapper = shallow(<Donation {...data}/>);
        expect(wrapper.find('DonorName')).toHaveLength(1);
        expect(wrapper.find('DonorName').text()).toEqual(data.donorDisplayName);
    });

    it("should render donor avatar", () => {
        wrapper = shallow(<Donation {...data}/>);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('img').prop("src")).toEqual(data.imageUrl);
    });

    it("should render donation amount", () => {
        wrapper = shallow(<Donation {...data}/>);
        expect(wrapper.find('DonationAmount')).toHaveLength(1);
        expect(wrapper.find('DonationAmount').text()).toContain(data.donorLocalAmount);
    });

    it("should render donation message", () => {
        wrapper = shallow(<Donation {...data}/>);
        expect(wrapper.find('DonationMessage')).toHaveLength(1);
        expect(wrapper.find('DonationMessage').text()).toContain(data.message);
    });

    it("should render donation date", () => {
        wrapper = shallow(<Donation {...data}/>);
        expect(wrapper.find('DonationTime')).toHaveLength(1);
        expect(wrapper.find('DonationTime').text()).toContain(data.date.toLocaleDateString("en-UK"));
    });

});