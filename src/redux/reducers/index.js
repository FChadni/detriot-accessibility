import {combineReducers} from "redux";
import {venueReducer, selectedVenueReducer} from "./venueReducer";

const reducers = combineReducers({
    allVenues: venueReducer,
    venue: selectedVenueReducer
});

export default reducers;