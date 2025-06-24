import { Checkbox, MyTypography } from "@/components/ui";
import { Box } from "@mui/material";
import classes from "./SchedulesFilter.module.scss";
import { PersonOutline } from "@mui/icons-material";
import { replaceOrUpdateItemByIndex } from "@/utils";
import { TSchedulesFilter } from "../pages/SchedulesList";

export const SchedulesFilter = ({
  filters,
  setFilters,
}: {
  filters: TSchedulesFilter;
  setFilters: React.Dispatch<React.SetStateAction<TSchedulesFilter>>;
}) => {
  const handleOnChange = (index: number, val: boolean) => {
    setFilters((prev) => replaceOrUpdateItemByIndex(prev, index, val));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.section}>
        <MyTypography
          className={classes.title}
          variant="body2"
          color="secondary"
          icon={<PersonOutline />}
        >
          Trabajadores
        </MyTypography>
        <Box className={classes.content}>
          <Checkbox
            label="Con horarios"
            checked={!!filters[0]}
            onChange={(_: string | number, val: boolean) =>
              handleOnChange(0, val)
            }
          />
          <Checkbox
            label="Sin horarios"
            checked={!!filters[1]}
            onChange={(_: string | number, val: boolean) =>
              handleOnChange(1, val)
            }
          />
        </Box>
      </Box>
    </Box>
  );
};
