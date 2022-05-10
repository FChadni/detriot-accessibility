import {ActionTypes} from "../constants/action-types";

export const setVenues = (venues) => {
    return {
        type: ActionTypes.SET_VENUES,
        payload: venues,
    };
};

export const selectedVenue = (venue) => {
    return {
        type: ActionTypes.SELECTED_VENUE,
        payload: venue,
    };
};

export const removeSelectedVenue = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_VENUE,
    };
};