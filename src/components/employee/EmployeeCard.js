import React from 'react';
import "./Employee.css";

const EmployeeCard = props => {
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
                    onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
                    Edit
                     </button>
                    <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire Employee</button>
        </div>
        </div>
    )
}

export default EmployeeCard;