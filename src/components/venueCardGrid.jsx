import React, {useState} from 'react';
import ven from "../image/image.png";
import "../css/resultGrid.css";
import {IoGrid} from "react-icons/io5";
import {useSelector} from "react-redux";

import { Link } from 'react-router-dom';




function VenueCardGrid() {
    const [limit, setLimit] = useState(4);
    const loadMore = () => {
        setLimit(prevState => prevState + 4);
    }
    const venues = useSelector((state) => state.allVenues.venues);
    console.log(venues[1])
    return (
        <div className="result2">
            <div className="res">
            <h2 className="offscreen">Search Results</h2>
            <div className="searchResults2">
                {venues.length === 0 ? (
                    <h1>No data Found, Please Try again</h1>
                ) : (
                    venues.slice(0, limit).map((item) => {
                        return(
                            <div className="resultItem2" key={item.id}>
                                <div className="venueImage2"><img src={ven} alt="Venue"/></div>
                                <div className="venueDetail2">
                                    <div className="venueName2">{item.name}</div>
                                    <div className="venueCategory2"><span><strong>Venue Type: </strong> {item.category}</span></div>
                                    <div className="venueAddress2"><strong>Address: </strong>{item.address}</div>
                                    <div className="accessibilityFeature2">
                                        {item.accessibility1.map((access,index) => (
                                            <div className="accessibilityText2" key={index}>
                                                <img className="accessibilityIcon2" src={access[0]} alt="Icons"/>{access[1]}
                                            </div>
                                        ))}
                                    </div>
                                    <Link to={`/venue/${item.id}`}>
                                        <span className="readMore2">
                                            <button className="readMoreBtn2" type="submit" aria-label="Read More Button">Read More</button>
                                        </span>
                                    </Link>

                                </div>
                            </div>
                        )}))}
            </div>
            {(limit <= venues?.length) &&
                <div className="loadMore2"><button className="loadMoreBtn2" onClick={loadMore}>LOAD MORE</button></div>
            }
            </div>

        </div>
    );


    // const renderList = venues.map((venue, index) => {
    //     return (
    //         <div className="resultItem2" key={venue.id}>
    //             <div className="venueImage2"><img src={ven} alt="Venue"/></div>
    //             <div className="venueDetail2">
    //                 <div className="venueName2">{venue.name}</div>
    //                 <div className="venueCategory2"><span><strong>Venue Type: </strong> {venue.category}</span></div>
    //                 <div className="venueAddress2"><strong>Address: </strong>{venue.address}</div>
    //                 <div className="accessibilityFeature2">
    //                     {/*<div className="accessibilityIcon2"><IoGrid/></div>*/}
    //                     {venue.accessibility.map((access,index) => (
    //                         <div className="accessibilityText2" key={index}><IoGrid/> {access}</div>
    //                     ))}
    //                 </div>
    //                 <Link to={`/venue/${venue.id}`}>
    //                     <span className="readMore2">
    //                         <button className="readMoreBtn2" type="submit" aria-label="Read More Button">Read More</button>
    //                     </span>
    //                 </Link>
    //             </div>
    //         </div>
    //     );
    // })
    //
    // return(<>{renderList}</>);
}

export default VenueCardGrid;