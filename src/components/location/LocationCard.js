import React from "react";
import "./Location.css";

const LocationCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Location: 
                </h3>
                <h4><span className="card-locationName">
                    {props.location.name}
                    </span></h4>
                    <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
            </div>
        </div>
    )
}

export default LocationCard;