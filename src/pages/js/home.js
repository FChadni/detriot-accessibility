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
    const [data, setData] = useState([]);
    const [Filters, setFilters] = useState({
        category: [],
        Accessibility: []
    });

    const venues = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        loadData1();
    },[]);
    const loadData = async () => {
        return await axios.get(`https://dap-project-api.herokuapp.com/venues`)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => console.log(err));
    }
    const loadData1 = async () => {
        const response =  await axios.get(`https://dap-project-api.herokuapp.com/venues`)
            .catch((err) => console.log(err));
        dispatch(setVenues(response.data));
    }

    console.log("venues: ", venues)

    let c = false;
    const changeView = () => {
        c = true;
        console.log(c)
    }


    const showFilterResults = async (filters) => {
        console.log(filters)
        await axios(`https://dap-project-api.herokuapp.com/venues`)
            .then((response) => {
                if(filters.category.length !== 0){
                    setData(response.data.filter((i) => {
                        return(
                            filters.category.includes(i.category)
                        )
                    }))
                }else{
                    setData(response.data)
                }
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


    return (
        <div>
            <Navbar/>
            <Main/>
            <VenueCardGrid/>

            {/*{data && (*/}
            {/*    <section className="container">*/}
            {/*        <div className="layout">*/}
            {/*            <button className="gridLayout btn" onClick={changeView} ><IoGrid/> GRID VIEW </button>*/}
            {/*            <button className="listLayout btn active"><IoList/> LIST VIEW </button>*/}
            {/*        </div>*/}
            {/*        <div className="resultContainer">*/}
            {/*            /!*  This is filtering section *!/*/}
            {/*            <div className="filter">*/}
            {/*                <Checkbox handleFilters={filters => handleFilters(filters, "category")}/>*/}
            {/*                <Checkbox2 handleFilters={filters => handleFilters2(filters, "accessibility")}/>*/}
            {/*            </div>*/}

            {/*            /!*{c === true ? (*!/*/}
            {/*            /!*    <VenueCard venue={data}/>*!/*/}
            {/*            /!*) : (*!/*/}
            {/*            /!*<VenueCardGrid venue={data}/>*!/*/}
            {/*            /!*)}*!/*/}

            {/*            <VenueCardGrid/>*/}

            {/*        </div>*/}
            {/*    </section>*/}
            {/*)}*/}
        </div>
    );
}

export default Home;