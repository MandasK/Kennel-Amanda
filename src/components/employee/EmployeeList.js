import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeList = (props) => {
    const [employees, setEmployees] = useState([]);
    const getEmployees = () => {
        return EmployeeManager.getAll().then(employeesFromAPI => {
          // We'll do something more interesting with this data soon.
          setEmployees(employeesFromAPI)
        });
      };
      const deleteEmployee = id => {
        EmployeeManager.delete(id)
          .then(() => EmployeeManager.getAll().then(setEmployees));
      };
    
      useEffect(() => {
        getEmployees();
      }, []);
    
      return (
        <>
        <section className="section-content">
       <button type="button"
          className="btn"
          onClick={() => {props.history.push("/employees/new")}}>
          Add Employee
      </button>
      </section>
        <div className="container-cards">
          {employees.map(employee => <EmployeeCard 
          key={employee.id} 
          employee={employee} 
          deleteEmployee={deleteEmployee} 
          />)}
        </div>
        </>
      );
    };

export default EmployeeList