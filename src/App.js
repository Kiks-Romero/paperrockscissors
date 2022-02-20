import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FiveHands from "./Components/FiveHands";
import ThreeHands from "./Components/ThreeHands";
import Games from "./Components/Games";
import Home from "./Components/Home";

function App() {
  return (
    <div className="root">
      <Router>
        <Routes>
          <Route path="/" element={<Games />}>
            <Route index element={<Home />} />
            <Route path="5Hands" element={<FiveHands />} />
            <Route path="3Hands" element={<ThreeHands />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
