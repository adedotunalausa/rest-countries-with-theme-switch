import React, { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function DropDownInput(props) {
    const [reveal, setReveal] = useState(false);

    function DropDown(props) {
        setReveal(prevValue => {
            if (prevValue === true) {
                return false;
            } else {
                return true;
            }
        });
    }

    return (
        <div className="dropdown-container">
            <button onClick={DropDown} className="dropdown-btn" data-toggle="dropdown" aria-haspopup="true">
                <div className="dropdown-elements">
                    Filter by region
                        <ExpandMoreIcon fontSize="small" />
                </div>
            </button>

            {reveal ? <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li onClick={() => { props.regionSet("Africa"); setReveal(false); props.showRegionResult() }} className="dropdown-item">
                    Africa
                    </li>
                <li onClick={() => { props.regionSet("Americas"); setReveal(false); props.showRegionResult() }} className="dropdown-item">
                    Americas
                    </li>
                <li onClick={() => { props.regionSet("Asia"); setReveal(false); props.showRegionResult() }} className="dropdown-item">
                    Asia
                    </li>
                <li onClick={() => { props.regionSet("Europe"); setReveal(false); props.showRegionResult() }} className="dropdown-item">
                    Europe
                    </li>
                <li onClick={() => { props.regionSet("Oceania"); setReveal(false); props.showRegionResult() }} className="dropdown-item">
                    Oceania
                    </li>
            </ul> : null}
        </div>
    )
}

export default DropDownInput;