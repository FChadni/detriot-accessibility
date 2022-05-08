import React, {useState} from 'react';
import "../css/checkbox.css"

const Accessibility = [
    {"id": 1, "name": "assisted listening device"},
    {"id": 2, "name": "deaf or hard of hearing"},
    {"id": 3, "name": "elevator"},
    {"id": 4, "name": "parking"},
    {"id": 5, "name": "restrooms"},
    {"id": 6, "name": "sensory"},
]

function Checkbox2(props) {
    const [Checked, setChecked] = useState([]);

    const handleCheck = (item) => {
        const currentIndex = Checked.indexOf(item);
        const newChecked = [...Checked];
        if(currentIndex === -1){
            newChecked.push(item);
        } else {
            newChecked.splice(currentIndex,1);
        }
        setChecked(newChecked)
        props.handleFilters(newChecked)
    }

    return (
        <div className="filterContainer">
            <p className="filterType">Accessibility</p>
            {Accessibility.map((item, index) => (
                <div className="checkboxItems" key={index}>
                    <input type="checkbox" className="check"
                           checked={Checked.indexOf(item.name) === -1 ? false : true}
                           onChange={() => handleCheck(item.name)}
                    />
                    <span className="checkboxItem">{item.name}</span></div>
            ))
            }
        </div>
    );
}

export default Checkbox2;