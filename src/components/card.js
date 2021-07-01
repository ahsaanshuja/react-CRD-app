import React from "react";

// material ui import
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

export default function MyCard(props) {
  const classes = makeStyles({
    root: {
      marginTop: "40px",
      width: "280px",
      marginLeft: "20px",
    },
  })();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.taskName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
