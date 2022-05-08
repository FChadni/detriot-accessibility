import React, {useEffect, useState} from 'react';
import '../../css/home.css';
import Navbar from "../../components/navbar";
import Main from "../../components/brand";
import axios from "axios";
import Checkbox from "../../components/checkbox";
import Checkbox2 from "../../components/checkbox2";
// import ven from "../../image/image.png";
// import Popup from "../../components/popup";
import {IoGrid} from "react-icons/io5"
import {IoList} from "react-icons/io5"
import VenueCard from "../../components/venueCard";
import VenueCardGrid from "../../components/venueCardGrid";

function Home(props) {
    const [data, setData] = useState([]);
    // const [show, setShow] = useState(false);
    // const [pokeItem, setItem] = useState();

    const [Filters, setFilters] = useState({
        category: [],
        Accessibility: []
    });
    // Handling search functionality in this function
    const filterCategory = async (value) => {
        data.filter((i) =>
            console.log(i.accessibility)
        )
        await axios(`https://dap-project-api.herokuapp.com/venues`)
            .then((response) => {
                setData(response.data.filter((i) => {
                    return(
                        i.category.includes(value)
                    )
                }))
            })
            .catch((err) => console.log(err))
    };
    const showFilterResults = async (filters) => {
        console.log(filters)
        await axios(`https://dap-project-api.herokuapp.com/venues`)
            .then((response) => {
                setData(response.data.filter((i) => {
                    return(
                        filters.category.includes(i.category)
                    )
                }))
            })
            .catch((err) => console.log(err))
    }
    const handleFilters = (filters, filterType) => {
        console.log("filterType ",filterType)
        const newFilters = { ...Filters }

        newFilters[filterType] = filters

        showFilterResults(newFilters);
        setFilters(newFilters)
    }
    const showFilterResults2 = async (filters) => {
        console.log(filters)
        await axios(`https://dap-project-api.herokuapp.com/venues`)
            .then((response) => {
                setData(response.data.filter((i) => {
                    return(
                        filters.accessibility.includes(i.accessibility.filter((a) => a))
                    )
                }))
            })
            .catch((err) => console.log(err))
    }
    const handleFilters2 = (filters, filterType) => {
        console.log("filterType ",filterType)
        const newFilters = { ...Filters }

        newFilters[filterType] = filters

        showFilterResults2(newFilters);
        setFilters(newFilters)
    }

    //  This function calls the loadData function
    useEffect(() => {
        loadData();
    },[]);
    //  This function loads all the data on the page
    const loadData = async () => {
        return await axios.get(`https://dap-project-api.herokuapp.com/venues`)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => console.log(err));
    }

    const changeLayout = () => {
        console.log("clicked on grid view")

        // resStyle = {
        //     display: "flex",
        //     flexdirection: "column"
        // }
    }


    return (
        <div>
            <Navbar/>
            <Main/>

            {data && (
                <section className="container">
                    <div className="layout">
                        <button className="gridLayout btn" onClick={changeLayout}><IoGrid/> GRID VIEW </button>
                        <button className="listLayout btn active"><IoList/> LIST VIEW </button>
                    </div>
                    <div className="resultContainer">
                        {/*  This is filtering section */}
                        <div className="filter">
                            <Checkbox handleFilters={filters => handleFilters(filters, "category")}/>
                            <Checkbox2 handleFilters={filters => handleFilters2(filters, "accessibility")}/>
                        </div>

                        {/*<VenueCard venue={data}/>*/}
                        <VenueCardGrid venue={data}/>

                        {/*<div className="result">*/}
                        {/*    <h2 className="offscreen">Search Results</h2>*/}
                        {/*    <div className="searchResults">*/}
                        {/*        {data.length === 0 ? (*/}
                        {/*            <h1>No data Found, Please Try again</h1>*/}
                        {/*        ) : (*/}
                        {/*            data.map((item, index) => {*/}
                        {/*                return(*/}
                        {/*                    <div className="resultItem" key={index}>*/}
                        {/*                        <div className="venueImage"><img src={ven} alt="Venue"/></div>*/}
                        {/*                        <div className="venueDetail">*/}
                        {/*                            <div className="venueName">{item.name}</div>*/}
                        {/*                            <div className="venueAddress">{item.address}</div>*/}
                        {/*                            <div className="venueCategory"><span>{item.category}</span></div>*/}
                        {/*                            <div className="accessibilityFeature">*/}
                        {/*                                {item.accessibility.map((access,index) => (*/}
                        {/*                                    <div className="accessibilityText" key={index}>{access}</div>*/}
                        {/*                                ))}*/}
                        {/*                            </div>*/}
                        {/*                            <div>*/}
                        {/*                                <button className="readMore" type="submit"*/}
                        {/*                                        aria-label="Read More Button"*/}
                        {/*                                        onClick={() => { setShow(true); setItem(item) }}>Read More</button>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                )}))}*/}
                        {/*        <Popup show={show} item={pokeItem} onClose={ () => setShow(false) }/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </section>
            )}
        </div>
    );
}

export default Home;