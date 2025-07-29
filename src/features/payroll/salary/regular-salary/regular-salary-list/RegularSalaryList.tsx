import { Button } from "@/shared/components/atoms/buttons/button/Button";
import { List } from "@/shared/components/organism/containers/list/List";
import { Box } from "@mui/material";
import { RegularSalaryItem } from "./components/RegularSalaryItem";

export const RegularSalaryList = () => {
  return (
    <List
      startItem={
        <Box width="100px" height="120px">
          <Button
            size="auto"
            variant="dashed"
            color="secondary"
            startIcon="add"
          >
            Crear
          </Button>
        </Box>
      }
      data={data}
      render={<RegularSalaryItem />}
      emptyText="No hay elementos"
      wrapper
    />
  );
};
