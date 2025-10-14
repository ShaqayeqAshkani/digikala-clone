import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Verify from "./components/auth/Verify";
import Home from "./pages/Home";
import AskQuestion from "./pages/AskQuestion"; 
import './assets/fonts/fonts.css';

function App() {
 
  const basename = "/digikala-clone";

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/ask-question" element={<AskQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
