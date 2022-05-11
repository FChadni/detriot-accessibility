import React, {useEffect, useState} from 'react';
import '../../css/home.css';
import Navbar from "../../components/navbar";
import Main from "../../components/brand";
import axios from "axios";
import Checkbox from "../../components/checkbox";
import Checkbox2 from "../../components/checkbox2";
import {IoGrid} from "react-icons/io5"
import {IoList} from "react-icons/io5"
import VenueCard from "../../components/venueCard";


import { useSelector } from "react-redux";
import VenueCardGrid from "../../components/venueCardGrid";
import {useDispatch} from "react-redux";
import {setVenues} from "../../redux/actions/venueActions";


function Home(props) {
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
                            <Checkbox handleFilters={filters => handleFilters(filters, "category")}/>
                            <Checkbox2 handleFilters={filters2 => handleFilters2(filters2, "accessibility")}/>
                        </div>
                        <VenueCardGrid/>
                    </div>
                </section>
            )}
        </div>
    );
}

export default Home;