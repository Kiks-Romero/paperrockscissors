// import {
//   AppBar,
//   Button,
//   IconButton,
//   makeStyles,
//   Toolbar,
//   Typography,
// } from "@material-ui/core";
// import HomeIcon from "@material-ui/icons/Home";
import { Link, Outlet } from "react-router-dom";
import "./Games.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

const Games = () => {
  // const classes = useStyles();
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <p>
              <b>Rock Paper Scissors (Lizzard Spock)</b>
            </p>
          </li>
          <li>
            <Link to="3Hands" className="link right">
              Three Hands
            </Link>
          </li>
          <li>
            <Link to="5Hands" className="link right">
              Five Hands
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Games;
