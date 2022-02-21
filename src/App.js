import "./App.css";

import FiveHands from "./Components/FiveHands";
import ThreeHands from "./Components/ThreeHands";
import Games from "./Components/Games";
import Home from "./Components/Home";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  function selectpage(change) {
    setPage(change);
  }

  return (
    <div className="root">
      <Games selectpage={selectpage} />
      {page === "home" && <Home selectpage={selectpage} />}
      {page === "five" && <FiveHands />}
      {page === "three" && <ThreeHands />}
    </div>
  );
}

export default App;
