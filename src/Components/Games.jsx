import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Link, Outlet } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Games = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Home"
          >
            <Link to="/">
              <HomeIcon style={{ fontSize: 40, color: "white" }} />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Rock Paper Scissors (Lizzard Spock)
          </Typography>
          <Button>
            <Link to="3Hands">Three Hands</Link>
          </Button>
          <Button>
            <Link to="5Hands">Five Hands</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <hr />
      <Outlet />
    </div>
  );
};

export default Games;
