import React from "react";
import UseRwd from "./UseRwd";
import "./styles/style.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

export const AppFooter = () => {
  const device = UseRwd();
  if (device === "PC") {
    return (
      <div className="footer-app">
        <Box
          component="footer"
          sx={{
            backgroundColor: "grey",
          }}
        >
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Lorem ipsum dolor sit amet.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, accusantium?
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, accusantium?
                </Typography>
              </Grid>
            </Grid>
            <hr />
            <Box mt={1} style={{ display: "flex" }}>
              <a href="https://www.instagram.com/boolean_546/">
                <Avatar
                  alt="pic"
                  src={require("./self/instagram.png")}
                  sx={{ width: 30, height: 30 }}
                  style={{ marginRight: "0.5rem" }}
                />
              </a>
              <a href="https://github.com/Wei546">
                <Avatar
                  alt="pic"
                  src={require("./self/github.png")}
                  sx={{ width: 30, height: 30 }}
                  style={{ marginRight: "0.5rem" }}
                />
              </a>
              <a href="https://www.threads.net/@boolean_546?hl=zh-tw">
                <Avatar
                  alt="pic"
                  src={require("./self/threads.png")}
                  sx={{ width: 30, height: 30 }}
                />
              </a>

              <Typography
                color="text.secondary"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {"Copyright © "}
              </Typography>
            </Box>
          </Container>
        </Box>
      </div>
    );
  } else if (device === "tablet") {
    return (
      <Box component="footer" sx={{ backgroundColor: "green" }}>
        <hr
          style={{
            color: "red",
            background: "grey",
            fontSize: "16px",
            lineHeight: 18,
            marginBottom: "5rem",
          }}
        />
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Lorem ipsum dolor sit amet.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                accusantium?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                accusantium?
              </Typography>
            </Grid>
          </Grid>
          <hr
            style={{
              color: "red",
              background: "green",
              fontSize: "16px",
              lineHeight: 18,
            }}
          />
          <Box mt={5} style={{ display: "flex" }}>
            <Avatar
              alt="pic"
              src={require("./self/github.png")}
              sx={{ width: 20, height: 20 }}
            />
            <Avatar
              alt="pic"
              src={require("./self/instagram.png")}
              sx={{ width: 20, height: 20 }}
            />
            <Avatar
              alt="pic"
              src={require("./self/threads.png")}
              sx={{ width: 20, height: 20 }}
            />
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  } else {
    return (
      <Box component="footer" sx={{ backgroundColor: "blue" }}>
        <hr
          style={{
            color: "red",
            background: "grey",
            fontSize: "12px",
            lineHeight: 18,
            marginBottom: "5rem",
          }}
        />
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={1} sm={3}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Lorem ipsum dolor sit amet.
              </Typography>
            </Grid>
            <Grid item xs={2} sm={3}>
              <Typography
                variant="h6"
                color="text.primary"
                gutterBottom
              ></Typography>
            </Grid>
            <Grid item xs={2} sm={3}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Lorem ipsum dolor sit amet.
              </Typography>
            </Grid>
          </Grid>
          <hr
            style={{
              color: "red",
              background: "green",
              fontSize: "16px",
              lineHeight: 18,
            }}
          />
          <Box mt={5} style={{ display: "flex" }}>
            <Avatar
              alt="pic"
              src={require("./self/github.png")}
              sx={{ width: 20, height: 20 }}
            />
            <Avatar
              alt="pic"
              src={require("./self/instagram.png")}
              sx={{ width: 20, height: 20 }}
            />
            <Avatar
              alt="pic"
              src={require("./self/threads.png")}
              sx={{ width: 20, height: 20 }}
            />
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }
};
export default AppFooter;
