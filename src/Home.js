import React from "react";
import "./Home.css";

import logo from "./images/hello-logo.webp";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

import Search from "./Search";
import SearchPage from "./SearchPage";

import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function Home() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minHeight: "100vh", width: "100vw", backgroundColor: "#222222" }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <img src={logo} style={{ paddingTop: "50px", maxWidth: "100vw" }} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography
          style={{ fontSize: "50px", color: "#e8eaec", fontFamily: "nunito" }}
        >
          The search engine for developers.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
        <Search />
      </Grid>
    </Grid>
  );
}
export default Home;
