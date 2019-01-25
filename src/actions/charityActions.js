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
        fetch('url')
            .then((res) => res.json())
            .then((donations) => {
                dispatch(fetchDonationsSuccess(donations));
            })
            .catch((error) => {
                dispatch(fetchDonationsError(error.message));
            })
    }
}
