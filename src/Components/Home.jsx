import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandRock,
  faHandScissors,
  faHandPaper,
  faHandSpock,
  faHandLizard,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   Grid,
//   makeStyles,
//   Typography,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
// } from "@material-ui/core";
import star from "../image/star.jpeg";
import triangle from "../image/triangle.jpeg";
import { Link } from "react-router-dom";
import "./Home.css";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//   },
//   media: {
//     height: 540,
//   },
//   textcard: {
//     height: 200,
//   },
// }));

const Home = () => {
  // const classes = useStyles();
  return (
    <div className="home">
      <div className="card">
        <Link to="5Hands" className="link">
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
        </Link>
      </div>
      <div className="card">
        <Link to="3Hands" className="link">
          <p className="cardtitle">Three Hands</p>
          <FontAwesomeIcon icon={faHandPaper} />
          <FontAwesomeIcon icon={faHandRock} />
          <FontAwesomeIcon icon={faHandScissors} />

          <p className="cardtext">
            "Scissors cuts paper, paper covers rock and rock crushes scissors"
          </p>
          <img src={triangle} alt="Triangle" className="cardmedia" />
        </Link>
      </div>
    </div>

    // <div className={classes.root}>
    //   <Grid container spacing={3}>
    //     <Grid item xs={12} className={classes.paper}>
    //       <Typography variant="h1">Explanation</Typography>
    //     </Grid>

    //     <Grid item xs={6}>
    //       <Link to="5Hands">
    //         <Card>
    //           <CardActionArea>
    //             <CardContent>
    //               <Typography variant="h2" className={classes.paper}>
    //                 Five Hands
    //               </Typography>
    //               <Typography variant="h4" className={classes.paper}>
    //                 <FontAwesomeIcon icon={faHandLizard} />
    //                 <FontAwesomeIcon icon={faHandPaper} />
    //                 <FontAwesomeIcon icon={faHandRock} />
    //                 <FontAwesomeIcon icon={faHandScissors} />
    //                 <FontAwesomeIcon icon={faHandSpock} />
    //               </Typography>
    //               <Typography variant="h6" className={classes.textcard}>
    //                 As Sheldon explains, "Scissors cuts paper, paper covers
    //                 rock, rock crushes lizard, lizard poisons Spock, Spock
    //                 smashes scissors, scissors decapitates lizard, lizard eats
    //                 paper, paper disproves Spock, Spock vaporizes rock, and as
    //                 it always has, rock crushes scissors."
    //               </Typography>
    //             </CardContent>
    //             <CardMedia
    //               className={classes.media}
    //               image={star}
    //               title="star"
    //             />
    //           </CardActionArea>
    //         </Card>
    //       </Link>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <Link to="3Hands">
    //         <Card>
    //           <CardActionArea>
    //             <CardContent>
    //               <Typography variant="h2" className={classes.paper}>
    //                 Three Hands
    //               </Typography>
    //               <Typography variant="h4" className={classes.paper}>
    //                 <FontAwesomeIcon icon={faHandPaper} />
    //                 <FontAwesomeIcon icon={faHandRock} />
    //                 <FontAwesomeIcon icon={faHandScissors} />
    //               </Typography>

    //               <Typography variant="h6" className={classes.textcard}>
    //                 "Scissors cuts paper, paper covers rock and rock crushes
    //                 scissors"
    //               </Typography>
    //             </CardContent>
    //             <CardMedia
    //               className={classes.media}
    //               image={triangle}
    //               title="triangle"
    //             />
    //           </CardActionArea>
    //         </Card>
    //       </Link>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default Home;
