import {ActionTypes} from "../constants/action-types";

const initialState = {
    venues: [],
};
export const venueReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_VENUES:
            return { ...state, venues: payload }
        default:
            return state
    }
};

export const selectedVenueReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_VENUE:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_VENUE:
            return {}
        default:
            return state;
    }
}