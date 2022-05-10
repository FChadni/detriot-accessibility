import React, {useState} from 'react';
import ven from "../image/image.png";
import Popup from "./popup";
import "../css/resultGrid.css";
import {IoGrid} from "react-icons/io5";
import {useSelector} from "react-redux";

import { Link } from 'react-router-dom';


function VenueCardGrid() {
    const venues = useSelector((state) => state.allVenues.venues);
    const renderList = venues.map((venue, index) => {
        return (
            <div className="resultItem2" key={venue.id}>
                <div className="venueImage2"><img src={ven} alt="Venue"/></div>
                <div className="venueDetail2">
                    <div className="venueName2">{venue.name}</div>
                    <div className="venueCategory2"><span><strong>Venue Type: </strong> {venue.category}</span></div>
                    <div className="venueAddress2"><strong>Address: </strong>{venue.address}</div>
                    <div className="accessibilityFeature2">
                        {/*<div className="accessibilityIcon2"><IoGrid/></div>*/}
                        {venue.accessibility.map((access,index) => (
                            <div className="accessibilityText2" key={index}><IoGrid/> {access}</div>
                        ))}
                    </div>
                    <Link to={`/venue/${venue.id}`}>
                        <span className="readMore2">
                            <button className="readMoreBtn2" type="submit" aria-label="Read More Button">Read More</button>
                        </span>
                    </Link>
                </div>
            </div>
        );
    })

    const [show, setShow] = useState(false);
    const [pokeItem, setItem] = useState();
    const [limit, setLimit] = useState(4);
    const loadMore = () => {
        setLimit(prevState => prevState + 4);
    }

    return(<>{renderList}</>);
    // return (
    //     <div className="result2">
    //         <div className="res">
    //         <h2 className="offscreen">Search Results</h2>
    //         <div className="searchResults2">
    //             {venue.length === 0 ? (
    //                 <h1>No data Found, Please Try again</h1>
    //             ) : (
    //                 venue.slice(0, limit).map((item, index) => {
    //                     return(
    //                         <div className="resultItem2" key={index}>
    //                             <div className="venueImage2"><img src={ven} alt="Venue"/></div>
    //                             <div className="venueDetail2">
    //                                 <div className="venueName2">{item.name}</div>
    //                                 <div className="venueCategory2"><span><strong>Venue Type: </strong> {item.category}</span></div>
    //                                 <div className="venueAddress2"><strong>Address: </strong>{item.address}</div>
    //                                 <div className="accessibilityFeature2">
    //                                     {/*<div className="accessibilityIcon2"><IoGrid/></div>*/}
    //                                     {item.accessibility.map((access,index) => (
    //                                         <div className="accessibilityText2" key={index}><IoGrid/> {access}</div>
    //                                     ))}
    //                                 </div>
    //                                 {/*<div className="readMore">*/}
    //                                 <span className="readMore2">
    //                                     <button className="readMoreBtn2" type="submit"
    //                                             aria-label="Read More Button"
    //                                             onClick={() => { setShow(true); setItem(item) }}>Read More</button>
    //                                 {/*</div>*/}
    //                                 </span>
    //                             </div>
    //                         </div>
    //                     )}))}
    //             <Popup show={show} item={pokeItem} onClose={ () => setShow(false) }/>
    //         </div>
    //         {(limit <= venue?.length) &&
    //             <div className="loadMore2"><button className="loadMoreBtn2" onClick={loadMore}>LOAD MORE</button></div>
    //         }
    //         </div>
    //
    //     </div>
    // );
}

export default VenueCardGrid;