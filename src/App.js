import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./login";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
