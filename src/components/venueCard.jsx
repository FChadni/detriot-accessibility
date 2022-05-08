import React, {useState} from 'react';
import ven from "../image/image.png";
import Popup from "./popup";
import "../css/result.css"


function VenueCard({venue}) {
    const [show, setShow] = useState(false);
    const [pokeItem, setItem] = useState();

    return (
        <div className="result">
            <h2 className="offscreen">Search Results</h2>
            <div className="searchResults">
                {venue.length === 0 ? (
                    <h1>No data Found, Please Try again</h1>
                ) : (
                    venue.map((item, index) => {
                        return(
                            <div className="resultItem" key={index}>
                                <div className="venueImage"><img src={ven} alt="Venue"/></div>
                                <div className="venueDetail">
                                    <div className="venueName">{item.name}</div>
                                    <div className="venueAddress">{item.address}</div>
                                    <div className="venueCategory"><span>{item.category}</span></div>
                                    <div className="accessibilityFeature">
                                        {item.accessibility.map((access,index) => (
                                            <div className="accessibilityText" key={index}>{access}</div>
                                        ))}
                                    </div>
                                    <div>
                                        <button className="readMore" type="submit"
                                                aria-label="Read More Button"
                                                onClick={() => { setShow(true); setItem(item) }}>Read More</button>
                                    </div>
                                </div>
                            </div>
                        )}))}
                <Popup show={show} item={pokeItem} onClose={ () => setShow(false) }/>
            </div>
        </div>
    );
}

export default VenueCard;