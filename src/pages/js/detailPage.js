import React from 'react';
import {Link} from "react-router-dom";
import pic from "../../image/image.png";

function DetailPage({show, item, onClose}) {
    if(!show){
        return null
    }
    return (
        <div className="popup">

        </div>
    );
}

export default DetailPage;