import React from 'react';
import pic from "../image/image.png";
import {Link} from "react-router-dom";

function Popup({show, item, onClose}) {
    if(!show){
        return null
    }
    return (
        <div className="popup">

            <Link to="/venueDetail">
                <span className="linkBtn">LINK</span>
            </Link>
            <button className="closeBtn" onClick={onClose}>X</button>
            <div className="venuePopupInfo">
                <div className="venueMainInfo">
                    <div className="venueSubName">{item.name}</div>
                </div>
                <div className="venueSubInfo">
                    <div className="venueDescription">
                        <div className="venueSubAddress">{item.address}</div>
                        <div className="venuePhone">{item.phone}</div>
                        <p className="venueDes">{item.description}</p>
                    </div>
                    <div className="venueSubImage"><img src={pic} alt="venue image"/></div>
                </div>
            </div>

        </div>
    );
}

export default Popup;