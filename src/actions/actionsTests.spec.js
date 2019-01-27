import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { getDonations } from './charityActions';
import{ GET_DONATIONS, GET_DONATIONS_SUCCESS, GET_DONATIONS_ERROR } from '../reducers/charityReducer';
import {constants} from "../constants";

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const mockData = {donations: [
    {
        amount: 55,
        currencyCode: "GBP",
        donorDisplayName: "Susan Thompson",
        donorLocalAmount: 55,
        donorLocalCurrencyCode: "GBP",
        donationDate: "/Date(1547902042000+0000)/",
        imageUrl: "https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif",
        message: "Remembering my mum, Mary",
    },
    {
        amount: 220,
        currencyCode: "GBP",
        donorDisplayName: "Richard Foulkes",
        donorLocalAmount: 220,
        donorLocalCurrencyCode: "GBP",
        donationDate: "/Date(1546300800000+0000)/",
        imageUrl: "https://images.justgiving.com/image/74e2e6e3-08f8-48f9-98f7-8ed2aab65250.jpg?template=profilesummary",
        message: "Money Raised from the Deutsche Bank GTB Xmas Jumper Day.",
    }
]};



describe('getDonations actions', () => {

    afterEach(() => {
        fetchMock.restore()
    })

    it('fetching donations success', () => {
        constants.charityIds.forEach((id) => {
            fetchMock.getOnce(`${constants.apiUrl}${constants.appId}/v1/charity/${id}/donations`, {
                body: mockData,
                headers: { 'content-type': 'application/json' }
            });
 
        });

        const expectedActions = [
          { type: GET_DONATIONS },
          { type: GET_DONATIONS_SUCCESS }
        ];
        const store = mockStore({ donations: null, loading: false, error: "" })
    
        return store.dispatch(getDonations()).then(() => {
          expect(store.getActions()).toMatchObject(expectedActions)
        })
    });

    it('fetching donations error', () => {
        constants.charityIds.forEach((id) => {
            fetchMock.getOnce(`${constants.apiUrl}${constants.appId}/v1/charity/${id}/donations`, 404);
        });

        const expectedActions = [
          { type: GET_DONATIONS },
          { type: GET_DONATIONS_ERROR }
        ];
        const store = mockStore({ donations: null, loading: false, error: "" })
    
        return store.dispatch(getDonations()).then(() => {
          expect(store.getActions()).toMatchObject(expectedActions)
        })
    });

});


