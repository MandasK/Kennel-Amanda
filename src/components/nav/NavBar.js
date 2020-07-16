import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }
    return (
        <header>
            <h1 className="sitetitle">
                Student Kennels
                <br />
                <small>Loving care when you're not there.</small>
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
                {props.hasUser
                 ? <li>
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
                  : null}
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
                {props.hasUser   
                 ? <li>
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
                   : null}   
                {props.hasUser
                 ? <li>
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
                : null}
                {props.hasUser
                ? <li>
                  <span className="nav-link" onClick={handleLogout}> Logout </span>
                </li>
                : <li>
                <NavLink 
                className="nav-link" 
                activeClassName="selected"
                exact to ="/login"
                activeStyle={{
                  fontWeight: "bold",
                  color: "lime"
                }}
                >
                    Login
                    </NavLink>
              </li>}
                  </ul>  
            </nav>
        </header>
        
    );
};

export default withRouter(NavBar)