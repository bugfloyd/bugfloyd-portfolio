import React from "react";
import Animate from "react-smooth";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "../../components/Particles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Typed from "react-typed";
import { Helmet } from "react-helmet";

import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

//import Header from "../../components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#090909",
    display: "flex",
  },
  main: {
    position: "absolute",
    color: "white",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
    zIndex: 1,
    backgroundColor: "#00000085",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    color: "tan",
    width: "9em",
    height: "6em",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta charSet="utf-8" />
        <title>Home | Yashar Hosseinpour</title>
        <meta
          name="description"
          content="Yashar Hosseinpour | Software Engineer"
        />
      </Helmet>
      <Animate to="1" from="0" attributeName="opacity">
        <Particles />
        <div className={classes.main}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={4}>
              <Typography className={classes.title} variant="h4">
                Yashar Hosseinpour
              </Typography>
              <Typography className={classes.subtitle} variant="h5">
                <Typed
                  strings={["software engineer full-stack developer sysAdmin"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={false}
                />
              </Typography>
            </Grid>
            <Grid container spacing={3} style={{ width: "200px" }}>
              <Grid item xs>
                <GitHubIcon />
              </Grid>
              <Grid item xs>
                <TwitterIcon />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Animate>
    </div>
  );
};

export default Home;
