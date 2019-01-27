import {constants} from "../constants";
import {
    GET_DONATIONS,
    GET_DONATIONS_SUCCESS,
    GET_DONATIONS_ERROR,
} from "../reducers/charityReducer";


function fetchDonations() {
    return {
        type: GET_DONATIONS
    }
}

function fetchDonationsSuccess(bookings) {
    return {
        type: GET_DONATIONS_SUCCESS,
        payload: bookings
    }
}

function fetchDonationsError(error) {
    return {
        type: GET_DONATIONS_ERROR,
        payload: error
    }
}

export function getDonations() {
    return (dispatch) => {
        dispatch(fetchDonations());
        const donations = constants.charityIds.map((id) => {
            return  fetch(`${constants.apiUrl}${constants.appId}/v1/charity/${id}/donations`, 
                        {
                            method: 'GET',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json'
                        }})
        })
        return Promise.all(donations)
                .then((responses) => {
                    return Promise.all(responses.map((resp) => resp.json()))
                            .then((data) => {
                                let donatList = [];
                                data.forEach((item) => {
                                    donatList = donatList.concat(item.donations);
                                });
                                donatList.forEach((item, index) => {
                                    item.id = index;
                                    item.date = new Date(parseInt(item.donationDate.substr(6)));
                                });
                                donatList.sort((a, b) => {
                                    return b.date - a.date;
                                });
                                dispatch(fetchDonationsSuccess(donatList));
                            });
                    
                })
                .catch((error) => {
                    dispatch(fetchDonationsError(error.message));
                });
    }
}
