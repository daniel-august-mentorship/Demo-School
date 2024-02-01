import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Classes from "./pages/classes";
import Students from "./pages/students";
import Reports from "./pages/reports";
import Setting from "./pages/setting";
import Mypage from "./pages/mypage";
import Inbox from "./pages/messageinbox";

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
          <Route path="setting" element={<Setting />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="inbox" element={<Inbox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
