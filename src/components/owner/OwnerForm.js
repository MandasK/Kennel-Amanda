import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

const OwnerForm = props => {
  const [owner, setowner] = useState({ name: "", number: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = event => {
    const stateToChange = { ...owner };
    stateToChange[event.target.id] = event.target.value;
    setowner(stateToChange);
  };

  const constructNewOwner = event => {
    event.preventDefault();
    if (owner.name === "" || owner.number === "") {
      window.alert("Please input a name and number");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      OwnerManager.post(owner)
        .then(() => props.history.push("/owners"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="number"
              placeholder="Phone Number"
            />
            <label htmlFor="number">Phone Number</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm