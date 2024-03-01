import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { ReactElement, useEffect, useRef, useState } from "react";

export const Project = (props) => {
  const { image, title, content, image_link, icon_link } = props;
  const cardRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          entry.target.classList.toggle("slide-in", entry.isIntersecting);
        },
        {
          threshole: 1,
        }
      );
    });
    observer.observe(cardRef.current);
  }, []);

  return (
    <Grid item xs={3} container spacing={1}>
      {/* 卡片的高度 */}
      <Card
        style={{
          height: "30rem",
          backgroundColor: "beige",
          marginBottom: "6.5rem",
        }}
        ref={cardRef}
        className="card"
      >
        <a href={image_link}>
          {/* 卡片裡圖片的位置、 */}
          <CardMedia
            className="media"
            image={require(`./self/${image}`)}
            title={title}
          />
        </a>
        <Stack
          direction="row"
          spacing={1}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          <Chip label="react" />
          <Chip label="SQL" />

          <a href={icon_link}>
            <Avatar
              alt="pic"
              src={require("./self/github.png")}
              sx={{ width: 30, height: 30 }}
            />
          </a>
        </Stack>
        <CardContent>
          <Typography gutterBottom variant="h10">
            {title}
          </Typography>
          <Typography gutterBottom variant="h10">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default Project;
