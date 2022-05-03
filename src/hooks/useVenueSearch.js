import { useState, useEffect } from 'react'
import axios from "axios";


const useVenueSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://dap-project-api.herokuapp.com/venues`)
                .then((response) => {
                    setData(response.data)
                })
                .catch((err) => console.log(err))
        }
        fetchData();
    },[term])

    return{data}
};

export default useVenueSearch;