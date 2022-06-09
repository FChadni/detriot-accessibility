import React, {useState, useEffect} from 'react';
import Navbar from "../../components/navbar";
import ven from "../../image/image.png";
import Popup from "../../components/popup";
import Main from "../../components/brand";
import axios from "axios";
import Checkbox from "../../components/checkbox";
import {useDispatch, useSelector} from "react-redux";
import {setVenues} from "../../redux/actions/venueActions";
import Checkbox2 from "../../components/checkbox2";
import VenueCardGrid from "../../components/venueCardGrid";
import Footer from "../../components/footer";


function Venue(props) {
    // const [data, setData] = useState([]);
    const [Filters, setFilters] = useState({
        category: []
    });
    const [Filters2, setFilters2] = useState({
        accessibility: []
    });
    console.log("f", Filters2)

    const venues = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        loadData();
    },[]);
    const loadData = async () => {
        const response =  await axios.get(`https://dap-project-api.herokuapp.com/venues`)
            .catch((err) => console.log(err));
        dispatch(setVenues(response.data));
    }


    const showFilterResults = async (filters) => {
        const response = await axios
            .get(`https://dap-project-api.herokuapp.com/venues`)
            .catch((err) => console.log(err))
        if(filters.category.length !== 0){
            dispatch(setVenues(response.data.filter((i) => {
                return(
                    filters.category.includes(i.category)
                )
            })))
        }else{
            dispatch(setVenues(response.data));
        }
    }
    const handleFilters = (filters, filterType) => {
        const newFilters = { ...Filters }
        newFilters[filterType] = filters
        showFilterResults(newFilters);
        setFilters(newFilters)
    }

    const showFilterResults2 = async (filters2) => {
        console.log(filters2)
        const response = await axios
            .get(`https://dap-project-api.herokuapp.com/venues`)
            .catch((err) => console.log(err))
        if(filters2.accessibility.length !== 0){
            dispatch(setVenues(response.data.filter((i) => {
                return(
                    filters2.accessibility.includes(i.parking) ||
                    filters2.accessibility.includes(i.restroom) ||
                    filters2.accessibility.includes(i.asl) ||
                    filters2.accessibility.includes(i.elevator) ||
                    filters2.accessibility.includes(i.device) ||
                    filters2.accessibility.includes(i.sensory) ||
                    filters2.accessibility.includes(i.animal) ||
                    filters2.accessibility.includes(i.wheelchair)
                )
            })))
        }else{
            dispatch(setVenues(response.data));
        }
    }
    const handleFilters2 = (filters2, filterType2) => {
        console.log("filter2: ",filters2)
        const newFilters2 = { ...Filters2 }
        newFilters2[filterType2] = filters2
        showFilterResults2(newFilters2);
        setFilters2(newFilters2)
    }

    // const [data, setData] = useState([]);
    // const [show, setShow] = useState(false);
    // const [pokeItem, setItem] = useState();
    //
    // const [Filters, setFilters] = useState({
    //     category: [],
    //     Accessibility: []
    // });
    // // Handling search functionality in this function
    // const filterCategory = async (value) => {
    //     data.filter((i) =>
    //         console.log(i.accessibility)
    //     )
    //     await axios(`https://dap-project-api.herokuapp.com/venues`)
    //         .then((response) => {
    //             setData(response.data.filter((i) => {
    //                 return(
    //                     i.category.includes(value)
    //                 )
    //             }))
    //         })
    //         .catch((err) => console.log(err))
    // };
    // const showFilterResults = async (filters) => {
    //     console.log(filters)
    //     await axios(`https://dap-project-api.herokuapp.com/venues`)
    //         .then((response) => {
    //             setData(response.data.filter((i) => {
    //                 return(
    //                     filters.category.includes(i.category)
    //                 )
    //             }))
    //         })
    //         .catch((err) => console.log(err))
    // }
    // const handleFilters = (filters, filterType) => {
    //     console.log("filterType ",filterType)
    //     const newFilters = { ...Filters }
    //
    //     newFilters[filterType] = filters
    //
    //     showFilterResults(newFilters);
    //     setFilters(newFilters)
    // }
    //
    //
    // //  This function calls the loadData function
    // useEffect(() => {
    //     loadData();
    // },[]);
    //
    // //  This function loads all the data on the page
    // const loadData = async () => {
    //     return await axios.get(`https://dap-project-api.herokuapp.com/venues`)
    //         .then((response) => {
    //             setData(response.data);
    //         })
    //         .catch((err) => console.log(err));
    // }

    return (
        <div>
            <Navbar/>
            <Main/>
            {venues && (
                <section className="container">
                    {/*<div className="layout">*/}
                    {/*    <button className="gridLayout btn"><IoGrid/> GRID VIEW </button>*/}
                    {/*    <button className="listLayout btn active"><IoList/> LIST VIEW </button>*/}
                    {/*</div>*/}
                    <div className="resultContainer">
                        {/*  This is filtering section */}
                        <div className="filter">
                            <Checkbox2 handleFilters={filters2 => handleFilters2(filters2, "accessibility")}/>
                            <Checkbox handleFilters={filters => handleFilters(filters, "category")}/>
                        </div>
                        <VenueCardGrid/>
                    </div>
                </section>
            )}
            <Footer/>
        </div>
        // <div>
        //     <Navbar/>
        //     <Main/>
        //
        //     {data && (
        //         <section className="resultContainer">
        //             {/*  This is filtering section */}
        //             <div className="filter">
        //                 <Checkbox handleFilters={filters => handleFilters(filters, "category")}/>
        //             </div>
        //
        //             <div className="result">
        //                 <h2 className="offscreen">Search Results</h2>
        //                 <div className="searchResults">
        //                     {data.length === 0 ? (
        //                         <h1>No data Found, Please Try again</h1>
        //                     ) : (
        //                         data.map((item, index) => {
        //                             return(
        //                                 <div className="resultItem" key={index}>
        //                                     <div className="venueImage"><img src={ven} alt="Venue"/></div>
        //                                     <div className="venueDetail">
        //                                         <div className="venueName">{item.name}</div>
        //                                         <div className="venueAddress">{item.address}</div>
        //                                         <div className="venueCategory"><span>{item.category}</span></div>
        //                                         <div className="accessibilityFeature">
        //                                             {item.accessibility.map((access,index) => (
        //                                                 <div className="accessibilityText" key={index}>{access}</div>
        //                                             ))}
        //                                         </div>
        //                                         <div>
        //                                             <button className="readMore" type="submit"
        //                                                     aria-label="Read More Button"
        //                                                     onClick={() => { setShow(true); setItem(item) }}>Read More</button>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             )}))}
        //                     <Popup show={show} item={pokeItem} onClose={ () => setShow(false) }/>
        //                 </div>
        //             </div>
        //         </section>
        //     )}
        // </div>
    );
}

export default Venue;