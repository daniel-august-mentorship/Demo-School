import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
