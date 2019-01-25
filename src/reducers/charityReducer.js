export const GET_DONATIONS = "GET_DONATIONS";
export const GET_DONATIONS_SUCCESS = "GET_DONATIONS_SUCCESS";
export const GET_DONATIONS_ERROR = "GET_DONATIONS_ERROR";

const initialState = {
    donations: null,
    loading: false,
    error: ""
};

export default function charity(state = initialState, action) {
    switch (action.type) {
        case 'GET_DONATIONS':
            return {...state};
        case 'GET_DONATIONS_SUCCESS':
            return {...state};
        case 'GET_DONATIONS_ERROR':
            return {...state};
        default:
            return state;
    }
}