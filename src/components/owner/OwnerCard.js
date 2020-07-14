import React from "react";
import "./Owner.css";

const OwnerCard = props => {
    return  (
        <div className="card">
        <div className="card-content">
        <picture>
          <img src={require("./owner.png")} alt="Owners" className="owner-img" />
        </picture>
            <h3>Owner</h3>
            <h4><span className="card-ownerName">
                    {props.owner.name}
                    </span></h4>
            <h5>
            <span className="card-ownerName">
                    {props.owner.number}
                    </span>
            </h5>
            <button type="button"
         onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}>
          Edit
        </button>
            <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove Owner</button>
        </div>
    </div>
    )
}

export default OwnerCard;