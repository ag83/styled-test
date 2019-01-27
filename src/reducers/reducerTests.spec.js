import charity, {GET_DONATIONS, GET_DONATIONS_SUCCESS, GET_DONATIONS_ERROR} from './charityReducer';

const initialState = {
    donations: null,
    loading: false,
    error: ""
};

describe('post reducer', () => {

    it('should return the initial state', () => {
      expect(charity(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_DONATIONS', () => {
        const getAction = {
          type: GET_DONATIONS
        };
        expect(charity({}, getAction)).toEqual({loading: true});
    });

    it('should handle GET_DONATIONS_SUCCESS', () => {
        const successAction = {
          type: GET_DONATIONS_SUCCESS,
          payload: 'payload'
        };
        expect(charity({}, successAction)).toEqual({ loading: false, donations: successAction.payload});
    });

    it('should handle GET_DONATIONS_ERROR', () => {
        const errorAction = {
          type: GET_DONATIONS_ERROR,
          payload: 'error text'
        };
        expect(charity({}, errorAction)).toEqual({loading: false, error: errorAction.payload});
    });

});