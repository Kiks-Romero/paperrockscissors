import { Grid, makeStyles, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import {
  faHandRock,
  faHandScissors,
  faHandPaper,
} from "@fortawesome/free-solid-svg-icons";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import { useState, useEffect } from "react";
import Logic from "./Logic";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  container: {
    display: "flex",
    justifyContent: "spaceBetween",
    padding: "10px",
  },
}));
// let you = 0,
//   pc = 0;

const hands = [
  {
    name: faHandRock,
    id: "r",
  },
  {
    name: faHandPaper,
    id: "p",
  },
  {
    name: faHandScissors,
    id: "s",
  },
];

const ThreeHands = () => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [score, setScore] = useState("");
  const [icon, setIcon] = useState("");
  const [you, setYou] = useState(0);
  const [pc, setPc] = useState(0);

  function actualscore(props) {
    setScore(props);
    if (props === "win") {
      setYou(you + 1);
    } else if (props === "lose") {
      setPc(pc + 1);
    } else {
    }
  }

  useEffect(() => {
    return setYou(0) & setPc(0);
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.paper}>
        Three Hands
      </Typography>
      <Grid container>
        <Grid item xs={4} className={classes.paper}>
          {user ? (
            <Grid item xs>
              <FontAwesomeIcon icon={icon} />
              <Button
                variant="contained"
                color="primary"
                onClick={() => setUser("")}
              >
                Again
              </Button>
            </Grid>
          ) : (
            hands.map(({ name, id }) => {
              return (
                <Grid item xs key={id}>
                  <FontAwesomeIcon
                    icon={name}
                    onClick={() => setUser(id) & setIcon(name)}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h1" className={classes.paper}>
            VS
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {user !== "" ? (
            <Logic user={user} game={3} actualscore={actualscore} />
          ) : (
            <div className={classes.paper}>
              <DesktopMacIcon />
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.paper}>
            {score}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.paper}>
            {you} - {pc}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ThreeHands;
