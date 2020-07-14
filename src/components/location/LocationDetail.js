import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import EmployeeCard from '../employee/EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager'
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "", number: ""  });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteEmployee = id => {
    EmployeeManager.delete(id)
      .then(() => EmployeeManager.getLocationForEmployee(props.match.params.locationId)).then((APIResult) => {
        setEmployees(APIResult)
      });
  };
  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.getWithEmployees(props.match.params.locationId)
      .then(APIResult => {
        setLocation(APIResult);
        setEmployees(APIResult.employees)
        setIsLoading(false);
      });
      
  }, [props.locationId]);
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <p>Address: {location.address}</p>
        <p>Phone Number: {location.number}</p>
        {employees.map(employee =>
        <EmployeeCard
          key={employee.id}
          employee={employee}
          deleteEmployee={deleteEmployee} 
          {...props}
        />
      )}
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close Location
        </button>
      </div>
    </div>
  );
}

export default LocationDetail;