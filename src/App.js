import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Classes from "./data/classes";
import Students from "./data/students";
import Reports from "./data/reports";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="classes" element={<Classes />} />
          <Route path="students" element={<Students />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
