import React, { useState, useEffect } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

const LocationEditForm = props => {
  const [location, setLocation] = useState({ name: "", address: "", number: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const updateExistingLocation = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLocation = {
      id: props.match.params.locationId,
      name: location.name,
      address: location.address,
      number: location.number
    };

    LocationManager.update(editedLocation)
      .then(() => props.history.push("/locations"))
  }

  useEffect(() => {
    LocationManager.get(props.match.params.locationId)
      .then(location => {
        setLocation(location);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={location.name}
            />
            <label htmlFor="name">Location Name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={location.address}
            />
            <label htmlFor="address">Address</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="number"
              value={location.number}
            />
            <label htmlFor="number">Phone Number</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingLocation}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default LocationEditForm