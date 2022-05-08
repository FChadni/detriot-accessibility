import React, {useState} from 'react';
import ven from "../image/image.png";
import Popup from "./popup";
import "../css/resultGrid.css"


function VenueCardGrid({venue}) {
    const [show, setShow] = useState(false);
    const [pokeItem, setItem] = useState();

    return (
        <div className="result2">
            <h2 className="offscreen">Search Results</h2>
            <div className="searchResults2">
                {venue.length === 0 ? (
                    <h1>No data Found, Please Try again</h1>
                ) : (
                    venue.map((item, index) => {
                        return(
                            <div className="resultItem2" key={index}>
                                <div className="venueImage2"><img src={ven} alt="Venue"/></div>
                                <div className="venueDetail2">
                                    <div className="venueName2">{item.name}</div>
                                    <div className="venueAddress2">{item.address}</div>
                                    <div className="venueCategory2"><span>{item.category}</span></div>
                                    <div className="accessibilityFeature2">
                                        {item.accessibility.map((access,index) => (
                                            <div className="accessibilityText2" key={index}>{access}</div>
                                        ))}
                                    </div>
                                    <div>
                                        <button className="readMore2" type="submit"
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

export default VenueCardGrid;