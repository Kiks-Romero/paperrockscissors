import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandRock,
  faHandScissors,
  faHandPaper,
  faHandSpock,
  faHandLizard,
} from "@fortawesome/free-solid-svg-icons";
import star from "../image/star.jpeg";
import triangle from "../image/triangle.jpeg";
import "./Home.css";

const Home = ({ selectpage }) => {
  return (
    <div className="home">
      <div className="card">
        <div className="link" onClick={() => selectpage("five")}>
          <p className="cardtitle">Five Hands</p>
          <FontAwesomeIcon icon={faHandLizard} />
          <FontAwesomeIcon icon={faHandPaper} />
          <FontAwesomeIcon icon={faHandRock} />
          <FontAwesomeIcon icon={faHandScissors} />
          <FontAwesomeIcon icon={faHandSpock} />
          <p className="cardtext">
            As Sheldon explains, "Scissors cuts paper, paper covers rock, rock
            crushes lizard, lizard poisons Spock, Spock smashes scissors,
            scissors decapitates lizard, lizard eats paper, paper disproves
            Spock, Spock vaporizes rock, and as it always has, rock crushes
            scissors."
          </p>
          <img src={star} alt="Star" className="cardmedia" />
        </div>
      </div>
      <div className="card">
        <div className="link" onClick={() => selectpage("three")}>
          <p className="cardtitle">Three Hands</p>
          <FontAwesomeIcon icon={faHandPaper} />
          <FontAwesomeIcon icon={faHandRock} />
          <FontAwesomeIcon icon={faHandScissors} />

          <p className="cardtext">
            "Scissors cuts paper, paper covers rock and rock crushes scissors"
          </p>
          <img src={triangle} alt="Triangle" className="cardmedia" />
        </div>
      </div>
    </div>
  );
};

export default Home;
