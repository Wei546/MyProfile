import React from "react";
import "./styles/style.css";
import About from "./About";
import Project from "./Project";
import App from "./App/App";
import Skill from "./Skill";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import UseRwd from "./UseRwd";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Grid from "@mui/material/Grid"; // Import Grid component
import AppFooter from "./AppFooter";
import { ReactElement, useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const device = UseRwd();

  const [slide, setIsSlide] = useState(false);
  const navbar = document.querySelector(".navbar");
  const handleClick = () => {
    console.log("click");
    console.log(navbar);
  };
  if (device === "PC") {
    return (
      <>
        <AppBar position="static" className="navbar">
          <Toolbar>
            <Typography component="div" onClick={() => handleClick()}>
              <Link to="/app" className="nav-app">
                Home page
              </Link>
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              className="nav-btn-pc"
              onClick={() => console.log("click nav right")}
            >
              <Link to="/about" className="nav-life">
                about me
              </Link>
              <Link to="/project" className="nav-project">
                project
              </Link>
              <Link to="/skill" className="nav-skill">
                skill
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
        <br />

        <Container>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/project"
              element={
                <Grid container spacing={3}>
                  <Project
                    image="pic1.jpg"
                    title="With my friend"
                    content="I remember I was a freshman then. We had lots of joy...."
                    image_link="https://github.com/Wei546/SwSystem/tree/main/WinFormsApp1"
                    icon_link="https://github.com/Wei546/SwSystem/tree/main/WinFormsApp1"
                  />
                  <Project
                    image="pic1.jpg"
                    title="With my friend"
                    content="I remember I was a freshman then. We had lots of joy...."
                  />
                  <Project
                    image="pic1.jpg"
                    title="With my friend"
                    content="I remember I was a freshman then. We had lots of joy...."
                  />
                  <Project
                    image="pic1.jpg"
                    title="With my friend"
                    content="I remember I was a freshman then. We had lots of joy...."
                  />
                  <Project
                    image="pic1.jpg"
                    title="With my friend"
                    content="I remember I was a freshman then. We had lots of joy...."
                  />
                  <Project
                    image="pic1.jpg"
                    title="With my friend"
                    content="I remember I was a freshman then. We had lots of joy...."
                  />
                  <Project
                    image="pic1.jpg"
                    title="With my friend"
                    content="I remember I was a freshman then. We had lots of joy...."
                  />
                  <Project
                    image="pic1.jpg"
                    title="With my friend"
                    content="I remember I was a freshman then. We had lots of joy...."
                  />
                </Grid>
              }
            />
            <Route
              path="/skill"
              element={
                <Skill
                  skill_image_link="https://www.apple.com/tw/apple-events/"
                  skill_image="pic9.jpg"
                  skill_title="myCertificate"
                />
              }
            />
            <Route path="/app" element={<App />} />
            <Route path="" element={<App />} />
          </Routes>
        </Container>
        <AppFooter />
      </>
    );
  }
};
export default Navbar;
