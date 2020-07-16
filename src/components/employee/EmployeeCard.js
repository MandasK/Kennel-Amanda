import React, { useState, useEffect } from 'react';
import "./Employee.css";
import AnimalManager from '../../modules/AnimalManager';


const EmployeeCard = props => {
    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        AnimalManager.getAnimalEmployee(props.employee.id)
        .then((response) => {

            setAnimals(response)
        
            
        }) 
        
    }, [])

    return (
        <div className="card">
        <div className="card-content">
        <picture>
          <img src={require("./newangel.png")} alt="Employees" className="employee-img" />
        </picture>
            <h3>Employee</h3>
            <h4><span className="card-employeeName">
                    {props.employee.name}
                    </span></h4>
                    <button type="button"
                    onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Details</button>
                    <button type="button"
                    onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
                    Edit
                     </button>
                     {
                        animals.length === 0 ? 
                      <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire Employee</button> : null
                     
                     }  
        </div>
        </div>
    )
}

export default EmployeeCard;