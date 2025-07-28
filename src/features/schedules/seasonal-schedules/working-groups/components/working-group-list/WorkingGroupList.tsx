import { List } from "@/shared/components/organism/containers/list/List";
import { WorkingGroupItem } from "./components/WorkingGroupItem";
import { Box } from "@mui/material";
import { Button } from "@/shared/components/atoms/buttons/button/Button";

export const WorkingGroupList = () => {
  return (
    <List
      startItem={
        <Box width="100px" height="50px">
          <Button
            size="auto"
            variant="dashed"
            color="secondary"
            startIcon="add"
          >
            Crear grupo
          </Button>
        </Box>
      }
      data={data}
      render={<WorkingGroupItem />}
      wrapper
    />
  );
};

// Shared Component (json?)
// width="100px"
// height="50px"
