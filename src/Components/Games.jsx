import "./Games.css";

const Games = ({ selectpage }) => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <div className="link" onClick={() => selectpage("home")}>
              Home
            </div>
          </li>
          <li>
            <p>
              <b>Rock Paper Scissors (Lizzard Spock)</b>
            </p>
          </li>
          <li>
            <div className="link" onClick={() => selectpage("three")}>
              Three Hands
            </div>
          </li>
          <li>
            <div className="link" onClick={() => selectpage("five")}>
              Five Hands
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Games;
