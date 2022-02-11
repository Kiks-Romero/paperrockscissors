import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FiveHands from "./Components/FiveHands";
import ThreeHands from "./Components/ThreeHands";
import Games from "./Components/Games";
import Home from "./Components/Home";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
