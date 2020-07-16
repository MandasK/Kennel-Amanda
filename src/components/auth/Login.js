import React, { useState } from "react"

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "", rememberMe: "" });
  // Update state whenever an input field is edited
  const handleFieldChange = (event) => {
    const stateToChange = { ...credentials };
    stateToChange[event.target.id] = event.target.value;
    setCredentials(stateToChange);
  };


  const handleLogin = (e) => {
    e.preventDefault();
    /*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
    */
   
   if(useState.rememberMe !== "on") {
    props.setUser(credentials);

    props.history.push("/");
   } else {
   localStorage.setItem(
        "credentials",
        JSON.stringify(credentials)
    )
    props.setUser(true)
    props.history.push("/");
  }
}
  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="Email address"
            required="" autoFocus="" />
          <label htmlFor="inputEmail">Email address</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <label>
        <input name="rememberMe" checked={useState.rememberMe = "on"} onChange={handleLogin} type='checkbox'/> Remember me
      </label>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
  
  }


export default Login;