import React from "react";
import Animate from "react-smooth";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "../../components/Particles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import Typed from "react-typed";
import { Helmet } from "react-helmet";

import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import WordPressIcon from "../../misc/icons/WordPress";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
    backgroundColor: "#00000090",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
    marginBottom: theme.spacing(3),
  },
  subtitle: {
    color: "tan",
    marginBottom: theme.spacing(1),
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
  iconWrap: {
    width: "200px",
    marginTop: theme.spacing(3),
  },
  icons: {
    color: "#b2b2b2",
    "&:hover": {
      color: "#eee",
    },
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
        <title>Yashar Hosseinpour | DevOps Engineer</title>
        <meta
          name="description"
          content="Yashar Hosseinpour | DevOps engineer, Full-Stack developer, sysAdmin"
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
            <Grid item xs={12}>
              <Typography className={classes.title} variant="h4">
                Yashar Hosseinpour
              </Typography>
              <Typography className={classes.subtitle} variant="h5">
                DevOps Engineer
              </Typography>
              <Typography className={classes.subtitle} variant="h5">
                Full-stack Developer
              </Typography>
              <Typography className={classes.subtitle} variant="h5">
                System Admin
              </Typography>
            </Grid>
            <Grid container spacing={3} className={classes.iconWrap}>
              <Grid item xs>
                <Link
                  href="https://github.com/bugfloyd"
                  target="blank"
                  className={classes.icons}
                >
                  <GitHubIcon />
                </Link>
              </Grid>
              <Grid item xs>
                <Link
                  href="https://profiles.wordpress.org/yashar_hv/"
                  target="blank"
                  className={classes.icons}
                >
                  <WordPressIcon />
                </Link>
              </Grid>
              <Grid item xs>
                <Link
                  href="https://www.linkedin.com/in/yashar-hosseinpour/"
                  target="blank"
                  className={classes.icons}
                >
                  <LinkedInIcon />
                </Link>
              </Grid>
              <Grid item xs>
                <Link
                  href="https://twitter.com/bugfloyd"
                  target="blank"
                  className={classes.icons}
                >
                  <TwitterIcon />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Animate>
    </div>
  );
};

export default Home;
