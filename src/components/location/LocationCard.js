import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

const LocationCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Location: 
                </h3>
                <h4><span className="card-locationName">
                    {props.locations.name}
                    </span></h4>
                    <Link to={(`/locations/${props.locations.id}`)}>
                        <button>Details</button>
                    </Link>
                    <button type="button"
                    onClick={() => props.history.push(`/locations/${props.locations.id}/edit`)}>
                     Edit
                    </button>
                    <button type="button" onClick={() => props.deleteLocation(props.locations.id)}>Close Location</button>
            </div>
        </div>
    )
}

export default LocationCard;