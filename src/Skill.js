import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export const Skill = (props) => {
  const { skill_image_link, skill_image, skill_title } = props;
  return (
    <>
      <div class="skill_toolDev">
        <h1>Tools</h1>
        <Grid
          style={{ display: "flex", justifyContent: "center" }}
          spacing={{ xs: 2 }}
        >
          <Card
            style={{
              display: "flex",
              alignItems: "center",
              border: "0.5rem solid",
              borderColor: "yellow",
              marginRight: "0.5rem",
              width: "12rem",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 60 }}
              image={require("./self/react.png")}
              alt="Live from space album cover"
            />
            <CardContent>
              <Typography component="div" variant="h5">
                React
              </Typography>
            </CardContent>
          </Card>
          <Card
            style={{
              display: "flex",
              alignItems: "center",
              border: "0.5rem solid",
              borderColor: "yellow",
              marginRight: "0.5rem",
              width: "12rem",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 60 }}
              image={require("./self/java.png")}
              alt="Live from space album cover"
            />
            <CardContent>
              <Typography component="div" variant="h5">
                Java
              </Typography>
            </CardContent>
          </Card>
          <Card
            style={{
              display: "flex",
              alignItems: "center",
              border: "0.5rem solid",
              borderColor: "yellow",
              marginRight: "0.5rem",
              width: "12rem",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 60 }}
              image={require("./self/java-script.png")}
              alt="Live from space album cover"
            />
            <CardContent>
              <Typography component="div" variant="h5">
                javascript
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
      <h1 class="skill_h1">Certificate</h1>
      <div class="skill_cerDiv">
        <Card
          style={{
            backgroundColor: "aquamarine",
            marginBottom: "6.5rem",
            width: "60%",
            height: "30rem",
          }}
          className="skill_card"
        >
          <a href={skill_image_link}>
            {/* 卡片裡圖片的位置、 */}
            <CardMedia
              className="card_media"
              image={require(`./self/${skill_image}`)}
            />
          </a>
          <CardContent>
            <Typography gutterBottom variant="h10">
              {skill_title}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default Skill;
