import React from "react";
import "./styles/style.css";
import { ListItem, List, ListItemAvatar, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
export const AboutList = (props_appList) => {
  const { image_appList, title_appList, content_appList1, content_appList2 } =
    props_appList;
  return (
    <div style={{ display: "flex" }} className="aboutList">
      <ListItemAvatar>
        <Avatar
          alt="pic"
          src={require(`./self/${image_appList}`)}
          sx={{ width: 300, height: 300 }}
          style={{ marginRight: "1rem" }}
        />
      </ListItemAvatar>
      <List
        sx={{
          borderStyle: "solid",
          borderRadius: "0.5rem",
          borderWidth: "0.1rem",
          borderColor: "antiquewhite",
        }}
      >
        <ListItem>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography variant="h4">{title_appList}</Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography varinat="h6">{content_appList1}</Typography>
                <hr />
                <Typography varint="h6">{content_appList2}</Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};
export default AboutList;
