import { useState, useEffect } from 'react'
import axios from "axios";
// import {useDispatch, useSelector} from "react-redux";
// import {setVenues} from "../redux/actions/venueActions";


const useVenueSearch = (term) => {
    const [data, setData] = useState(null);
    // const venues = useSelector((state) => state);
    // const dispatch = useDispatch();

    useEffect(() => {
        // const fetchData = async () => {
        //   const response = await axios
        //       .get(`https://dap-project-api.herokuapp.com/venues`)
        //       .catch((err) => console.log("err", err))
        //     dispatch(setVenues(response.data))
        // }
        const fetchData = async () => {
            await axios.get(`https://dap-project-api.herokuapp.com/venues`)
                .then((response) => {
                    setData(response.data)
                })
                .catch((err) => console.log(err))
        }
        fetchData(data);
    },[term])

    return{data, setData}
};

export default useVenueSearch;