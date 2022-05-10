import React, { useEffect } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectedVenue, removeSelectedVenue,} from "../../redux/actions/venueActions";

function DetailPage() {
    const venue = useSelector((state) => state.venue);
    const {venueId} = useParams();
    const dispatch = useDispatch();
    console.log(venue);

    const fetchVen = async () => {
      const response = await axios
          .get(`https://dap-project-api.herokuapp.com/venues/${venueId}`)
          .catch((err) => {
              console.log("err", err)
          });
      dispatch(selectedVenue(response.data));
    };

    useEffect(() => {
        if(venueId && venueId !== "") fetchVen();
        return () => {
            dispatch(removeSelectedVenue())
        }
    }, [venueId])
    return(
        <div>
            {Object.keys(venue).length === 0 ? (
                <div>...Loading</div>
            ):(
                <div>
                    <div>{venue.name}</div>
                    <div>{venue.address}</div>
                    <div>{venue.category}</div>
                    <div>{venue.accessibility}</div>
                    <div>{venue.image}</div>
                </div>
            )}
        </div>
    );
}

export default DetailPage;