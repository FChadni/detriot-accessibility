import React, {useState, useEffect} from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {useStateValue} from "../hooks/stateProvider";
import {actionTypes} from "../hooks/reducer";
import {IoSearch} from "react-icons/io5"
import {IoClose} from "react-icons/io5"

function Search(props) {
    const [{}, dispatch] = useStateValue();
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
    }, []);
    const loadData = async () => {
        return await axios.get("https://dap-project-api.herokuapp.com/venues")
            .then((res) => {
                setData(res.data);
            }).catch((err) => console.log(err));
    }


    const handleSearch = (e) =>{
        e.preventDefault();
        console.log("input", input)
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        navigate("/search");
    }

    const onSearch = (searchTerm) => {
        setInput(searchTerm);
        // handleSearch(setInput(searchTerm));
        console.log("search ", searchTerm);
    }

    return (
        <>
            <form className="searchForm">
                <div className="searchBar">
                    <div className="searchIcon"><IoSearch/></div>
                    <label className="offscreen" >Search for accessibility resources, theatres, or venues in Detroit</label>
                    <input className="search" type="search" autoComplete="off"
                           placeholder="Search for accessibility resources, theatres, or venues in Detroit"
                           value={input}
                           onChange={ (e) => setInput(e.target.value)}
                    />
                    <div className="clearIcon"><IoClose/></div>
                </div>
                <button className="searchBtn" type="submit" aria-label="submit button" onClick={handleSearch}>Search</button>

                <div className="suggestion">
                    {data.filter((item) => {
                        const searchTerm = input.toLowerCase();
                        const pokename = item.name.toLowerCase();

                        return (
                            searchTerm
                            && pokename.startsWith(searchTerm)
                            && pokename !== searchTerm
                        )
                    })
                        .map((item) => (
                            <div className="suggestion-list"
                                 onClick={() => onSearch(item.name)}
                                 key={item.name}>
                                {item.name}
                            </div>
                        ))}
                </div>

            </form>
        </>
    );
}

export default Search;