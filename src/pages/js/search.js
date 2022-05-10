import React, { useState} from 'react';
import '../../css/result.css';
import Navbar from "../../components/navbar";
import Main from "../../components/brand";
import ven from "../../image/image.png";
import {useStateValue} from "../../hooks/stateProvider";
import useVenueSearch from "../../hooks/useVenueSearch";
import Popup from "../../components/popup";



function Search(props) {
    // setting search result display
    const [{term}, dispatch] = useStateValue();
    const { data } = useVenueSearch(term);

    // setting popup
    const [show, setShow] = useState(false);
    const [pokeItem, setItem] = useState();

    // const [limit, setLimit] = useState(4);
    // const loadMore = () => {
    //     setLimit(prevState => prevState + 4);
    // }

    // Display
    return (
        <div>
            <Navbar/>
            <Main/>
            {term && (
                <section className="resultContainer">
                    <div className="filter">
                        {/*<CheckboxFilter handleFilters={filters => handleFilters(filters, "category")}/>*/}
                    </div>
                    <div className="result">
                        <h2 className="offscreen">Search Results</h2>
                        <div className="searchResults">
                            {data?.filter(data =>
                                data.name.toLowerCase().includes(term.toLowerCase()) ||
                                data.address.toLowerCase().includes(term.toLowerCase()) ||
                                data.category.toLowerCase().includes(term.toLowerCase()) ||
                                data.accessibility.includes(term)
                            )
                                .map((item, index) => (
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
                                                <button className="readMore" type="submit" aria-label="Read More Button"
                                                        onClick={() => { setShow(true); setItem(item) }}>Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            <Popup show={show} item={pokeItem} onClose={ () => setShow(false) }/>
                            {/*{(limit <= data.length) &&*/}
                            {/*    <div className="loadMore2"><button className="loadMoreBtn2" onClick={loadMore}>LOAD MORE</button></div>*/}
                            {/*}*/}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default Search;