import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./pages.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState(false);

  const handleLogin = () => {
    if (username === "" || password === "") {
      setError(true);
    } else {
      alert("welcome");
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
          />
        </div>
        <br />
      </div>
      {Error && (
        <Alert variant="warning">Username and password are required.</Alert>
      )}
      <Button variant="primary" size="lg" onClick={handleLogin}>
        Submit
      </Button>{" "}
      <br />
      <br />
      {/* <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Submit
        </Button>
      </div> */}
    </div>
  );
}

export default Login;
