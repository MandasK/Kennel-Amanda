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
                    {props.location.name}
                    </span></h4>
                    <Link to={(`/locations/${props.location.id}`)}>
                        <button>Details</button>
                    </Link>
                    <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
            </div>
        </div>
    )
}

export default LocationCard;