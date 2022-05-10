import React, { useState} from 'react';
import '../../css/result.css';
import Navbar from "../../components/navbar";
import Main from "../../components/brand";
import ven from "../../image/image.png";
import {useStateValue} from "../../hooks/stateProvider";
import useVenueSearch from "../../hooks/useVenueSearch";
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import Checkbox from "../../components/checkbox";
import axios from "axios";
// import {setVenues} from "../../redux/actions/venueActions";
// import {setData} from "../../hooks/useVenueSearch"
// import Popup from "../../components/popup";



function Search(props) {
    // setting search result display
    const [{term}, dispatch] = useStateValue();
    console.log("dispatch ",dispatch)
    const { data, setData } = useVenueSearch(term);
    console.log("data", data)

    const venues = useSelector((state) => state);
    console.log("ven", venues)
    const d = useDispatch();
    const [Filters, setFilters] = useState({
        category: [],
        Accessibility: []
    });
    const showFilterResults = async (filters) => {
        const response = await axios
            .get(`https://dap-project-api.herokuapp.com/venues`)
            .catch((err) => console.log(err))
        if(filters.category.length !== 0){
            setData(response.data.filter((i) => {
                return(
                    filters.category.includes(i.category)
                )
            }))
        }else{
            setData(response.data);
        }
    }
    const handleFilters = (filters, filterType) => {
        const newFilters = { ...Filters }
        newFilters[filterType] = filters
        showFilterResults(newFilters);
        setFilters(newFilters)
    }

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
                        <Checkbox handleFilters={filters => handleFilters(filters, "category")}/>
                    </div>
                    <div className="result2">
                        <div className="res">
                            <h2 className="offscreen">Search Results</h2>
                            <div className="searchResults2">
                            {data?.filter(data =>
                                data.name.toLowerCase().includes(term.toLowerCase()) ||
                                data.address.toLowerCase().includes(term.toLowerCase()) ||
                                data.category.toLowerCase().includes(term.toLowerCase()) ||
                                data.accessibility.includes(term)
                            )
                                .map((item, index) => (
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
                                            <Link to={`/venue/${item.id}`}>
                                                <span className="readMore2">
                                                    <button className="readMoreBtn2" type="submit" aria-label="Read More Button">Read More</button>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
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