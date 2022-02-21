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
      <h2 className="paper">Five Hands</h2>
      <div className="container">
        {user ? (
          <div className="yourselect" onClick={() => setUser("")}>
            <FontAwesomeIcon icon={icon} size="4x" className="yourhand" />
            <div className="button">Again</div>
          </div>
        ) : (
          hands.map(({ name, id }) => {
            return (
              <FontAwesomeIcon
                icon={name}
                size="4x"
                onClick={() => setUser(id) & setIcon(name)}
                className="selection"
                key={id}
              />
            );
          })
        )}
      </div>
      <div className="score">
        <p>VS</p>
        {score ? <p>{score}</p> : <p>Chose one hand</p>}
        <p>
          {you}-{pc}
        </p>
      </div>
      {user !== "" ? (
        <Logic user={user} game={3} actualscore={actualscore} />
      ) : (
        <div className="pc">
          <FontAwesomeIcon icon={faRobot} size="8x" />
        </div>
      )}
    </div>
  );
};

export default FiveHands;
