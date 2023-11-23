import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Card from "./pages/card";

function App() {
  return (
    <div className="App">
      <Card />
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="card" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
