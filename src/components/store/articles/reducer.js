import { FETCH_STATUSES } from '../../../utils/constants';
import { 
    GET_ARTICLES_REQUEST, 
    GET_ARTICLES_SUCCESS, 
    GET_ARTICLES_FAILURE 
} from './actions';

const initialState = {
    data: [],
    error: null,
    status: FETCH_STATUSES.IDLE,
};

export const atriclesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLES_REQUEST: {
            return {
                ...state,
                error: null,
                status: FETCH_STATUSES.REQUEST,
            };
        }
        case GET_ARTICLES_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                status: FETCH_STATUSES.SUCCESS,
            };
        }
        case GET_ARTICLES_FAILURE: {
            return {
                ...state,
                status: FETCH_STATUSES.FAILURE,
                error: action.payload,
            };
        }
        default:
            return state;
    }
};