import React, { useEffect } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectedVenue, removeSelectedVenue,} from "../../redux/actions/venueActions";
import Navbar from "../../components/navbar";
import ven from "../../image/image.png";
import "../../css/venueDetail.css"
import Footer from "../../components/footer";

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
        <div className="venueDetail">
            <Navbar/>
            <section className="venueDetailContainer">
                {Object.keys(venue).length === 0 ? (
                    <div>...Loading</div>
                ):(
                    <div className="venueDetailMain">
                        <div className="venueDetailTop">
                            <div className="venueDetailLeft">
                                <h2 className="venueDetailName">{venue.name}</h2>
                                <p className="venueDetailAddress">{venue.address}</p>
                                <p className="venueDetailPhone">xxx-xxx-xxxx</p>
                                <p className="venueDetailDes">{venue.description}</p>
                            </div>
                            <div className="venueDetailRight">
                                <img className="venueDetailImage" src={venue.image} alt=""/>
                            </div>
                        </div>
                        <div className="venueDetailBottom">
                            {venue.accessibilityDetail.map((item) => {
                                return(
                                    <div className="venueDetailAccessibility">
                                        <div className="accessibilityHeading">{item[0]}</div>
                                        <div className="accessibilitySubHeading">{item[1]}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </section>
            <Footer/>
        </div>
    );
}

export default DetailPage;