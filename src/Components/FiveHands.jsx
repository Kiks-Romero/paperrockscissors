import { Grid, makeStyles, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandRock,
  faHandScissors,
  faHandPaper,
  faHandLizard,
  faHandSpock,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Logic from "./Logic";
import Button from "@material-ui/core/Button";
import "./Tablero.css";

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
  {
    name: faHandLizard,
    id: "l",
  },
  {
    name: faHandSpock,
    id: "q",
  },
];

const FiveHands = () => {
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
    <div className="root">
      <Typography variant="h2" className="paper">
        Five Hands
      </Typography>
      <Grid container display="flex">
        <Grid item xs={4} className="paper">
          {user ? (
            <Grid item>
              <FontAwesomeIcon icon={icon} size="4x" />
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
                <Grid item key={id}>
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={name}
                      size="4x"
                      onClick={() => setUser(id) & setIcon(name)}
                    />
                  </div>
                </Grid>
              );
            })
          )}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h1" className="paper">
            VS
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {user !== "" ? (
            <Logic user={user} game={5} actualscore={actualscore} />
          ) : (
            <div className="icon">
              <FontAwesomeIcon icon={faRobot} size="8x" />
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" className="paper">
            {score}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" className="paper">
            {you} - {pc}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default FiveHands;
