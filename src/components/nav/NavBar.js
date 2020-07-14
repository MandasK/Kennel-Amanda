import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header>
            <h1 className="sitetitle">
                Student Kennels
                <br />
            </h1>
            <nav>
              <ul className="container">
                  <li>
                      <NavLink 
                      className="nav-link"
                      activeClassName="selected" 
                      exact to="/"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "lime"
                      }}
                      >
                          Home
                      </NavLink>
                  </li>
                  <li>
                      <NavLink 
                      className="nav-link" 
                      activeClassName="selected"
                      exact to="/animals"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "lime"
                      }}
                      >
                          Animals
                      </NavLink>
                  </li>
                  <li>
                      <NavLink 
                      className="nav-link" 
                      activeClassName="selected"
                      exact to="/locations"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "lime"
                      }}
                      >
                     Locations
                      </NavLink>
                      </li>
                  <li>
                    <NavLink 
                    className="nav-link" 
                    activeClassName="selected"
                    exact to="/employees" 
                    activeStyle={{
                        fontWeight: "bold",
                        color: "lime"
                      }}
                    >
                      Employees
                    </NavLink>
                      </li>
                  <li>
                  <NavLink 
                  className="nav-link" 
                  activeClassName="selected"
                  exact to="/owners"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "lime"
                  }}
                  >  
                      Owners
                  </NavLink>   
                      </li>
                  </ul>  
            </nav>
        </header>
    );
};

export default withRouter(NavBar)