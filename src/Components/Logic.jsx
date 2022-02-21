import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandRock,
  faHandScissors,
  faHandPaper,
  faHandSpock,
  faHandLizard,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

let cpu;
const Logic = (props) => {
  const hands = [
    faHandRock,
    faHandPaper,
    faHandScissors,
    faHandLizard,
    faHandSpock,
  ];

  function random(game) {
    const number = Math.floor(Math.random() * game);
    cpu = number;
  }

  useEffect(() => {
    random(props.game);
    switch (props.user + cpu) {
      case "r2":
        props.actualscore("win");

        break;
      case "r3":
        props.actualscore("win");

        break;
      case "p0":
        props.actualscore("win");

        break;
      case "p4":
        props.actualscore("win");

        break;
      case "s1":
        props.actualscore("win");

        break;
      case "s3":
        props.actualscore("win");

        break;
      case "l1":
        props.actualscore("win");

        break;
      case "l4":
        props.actualscore("win");

        break;
      case "q0":
        props.actualscore("win");

        break;
      case "q2":
        props.actualscore("win");

        break;
      case "r1":
        props.actualscore("lose");
        break;
      case "r4":
        props.actualscore("lose");
        break;
      case "p2":
        props.actualscore("lose");
        break;
      case "p3":
        props.actualscore("lose");
        break;
      case "s0":
        props.actualscore("lose");
        break;
      case "s4":
        props.actualscore("lose");
        break;
      case "l0":
        props.actualscore("lose");
        break;
      case "l2":
        props.actualscore("lose");
        break;
      case "q1":
        props.actualscore("lose");
        break;
      case "q3":
        props.actualscore("lose");
        break;
      case "r0":
        props.actualscore("draw");
        break;
      case "p1":
        props.actualscore("draw");
        break;
      case "s2":
        props.actualscore("draw");
        break;
      case "l3":
        props.actualscore("draw");
        break;
      case "q4":
        props.actualscore("draw");
        break;

      default:
        console.log("ocurrio un error");
        break;
    }
  }, [props.user]);

  return (
    <div>
      {cpu !== undefined && (
        <div className="pc">
          <FontAwesomeIcon icon={hands[cpu]} size="4x" />
        </div>
      )}
    </div>
  );
};

export default Logic;
