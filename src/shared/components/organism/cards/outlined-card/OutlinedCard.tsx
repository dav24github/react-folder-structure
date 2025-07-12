import { Box } from "@mui/material";
import clsx from "clsx";
import React from "react";

/*
    FormLayout => contained only CardTitle and CardBody or children (CardBody)
*/
export const OutlinedCard = ({ title, body }: CardProps) => {
  return (
    <Box className={clsx(classes.card, classes["outlined-card"])}>
      {/* <Box className={classes["elevated-header"]} */}
      {title ? (
        <CardTitle variant="h1" color="primary">
          {title}
        </CardTitle>
      ) : (
        children[0]
      )}
      {children.length === 1 ? (
        <CardBody>{children}</CardBody>
      ) : children.length === 2 ? (
        children[1]
      ) : children.length === 3 ? (
        children[3]
      ) : (
        // if not CardBody
        <Error />
      )}
    </Box>
  );
};

export const OutlinedCardHeader = () => {};
