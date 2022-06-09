import React, {useState} from 'react';
import "../css/checkbox.css"

const Accessibility = [
    {"id": 1, "name": "Accessible Parking"},
    {"id": 2, "name": "Accessible Restroom"},
    {"id": 3, "name": "ASL Interpreter"},
    {"id": 4, "name": "Elevator"},
    {"id": 5, "name": "Listening Device"},
    {"id": 6, "name": "Sensory Kit"},
    {"id": 7, "name": "Service Animal"},
    {"id": 8, "name": "Wheelchair Accessible"},
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
            <p className="filterType">Accessibility Features</p>
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