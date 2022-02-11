import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandRock,
  faHandScissors,
  faHandPaper,
  faHandSpock,
  faHandLizard,
} from "@fortawesome/free-solid-svg-icons";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import star from "../image/star.jpeg";
import triangle from "../image/triangle.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.paper}>
          <Typography variant="h1">Explanation</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" className={classes.paper}>
            Five Hands
          </Typography>
          <Typography variant="h4" className={classes.paper}>
            <FontAwesomeIcon icon={faHandLizard} />
            <FontAwesomeIcon icon={faHandPaper} />
            <FontAwesomeIcon icon={faHandRock} />
            <FontAwesomeIcon icon={faHandScissors} />
            <FontAwesomeIcon icon={faHandSpock} />
          </Typography>

          <Typography variant="h6">
            As Sheldon explains, "Scissors cuts paper, paper covers rock, rock
            crushes lizard, lizard poisons Spock, Spock smashes scissors,
            scissors decapitates lizard, lizard eats paper, paper disproves
            Spock, Spock vaporizes rock, and as it always has, rock crushes
            scissors."
          </Typography>
          <img src={star} alt="star" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" className={classes.paper}>
            Three Hands
          </Typography>
          <Typography variant="h4" className={classes.paper}>
            <FontAwesomeIcon icon={faHandPaper} />
            <FontAwesomeIcon icon={faHandRock} />
            <FontAwesomeIcon icon={faHandScissors} />
          </Typography>

          <Typography variant="h6">
            "Scissors cuts paper, paper covers rock and rock crushes scissors"
          </Typography>
          <img src={triangle} alt="triangle" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
