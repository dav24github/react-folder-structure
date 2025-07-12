import React, { Fragment } from "react";
import { IconButton } from "../../atoms/buttons/Icon-button/IconButton";
import { ItemButton } from "../../atoms/buttons/item-button/ItemButton";
import { Box, Collapse } from "@mui/material";
import { List } from "../../containers/list/List";

export const MainSidebar = () => {
  return (
    <Box>
      {/* header */}
      <Box>
        <SVG />
        <IconButton />
      </Box>

      <List
        data={[].map((_, i) => (
          <Fragment key={i}>
            <ItemButton />
            <Collapse>
              <ItemButton />
              <ItemButton />
              <ItemButton />
              <ItemButton />
              <ItemButton />
            </Collapse>
          </Fragment>
        ))}
        emptyText="No hay elementos"
      />
    </Box>
  );
};
