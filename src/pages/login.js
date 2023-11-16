import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./pages.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      setError(true);
    } else if (username === "test" && password === "test") {
      alert("welcome");
    } else {
      setError(false);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="page">
      <div className="titleWrap">Login</div>
      <div className="contentWrap">
        <div className="inputWrap">
          <input
            type="text"
            value={username}
            className="input"
            placeholder="User name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div className="inputWrap">
          <input
            type="password"
            value={password}
            className="input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
      </div>
      {error && (
        <Alert variant="warning">Username and password are required.</Alert>
      )}
      <Button variant="primary" size="lg" onClick={handleLogin}>
        Submit
      </Button>{" "}
      <br />
      <br />
    </div>
  );
}

export default Login;
