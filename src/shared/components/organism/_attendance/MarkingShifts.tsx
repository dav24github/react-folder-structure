import { Button } from "../../atoms/buttons/button/Button";
import { Typography } from "../../atoms/typography/Typography";
import { ColumnContainer } from "../containers/column-container/ColumnContainer";

export const MarkingShifts = (props: any) => {
  return (
    <>
      <Typography color="secondary" variant="body2">
        Selecciona el horario para marcar:
      </Typography>
      {shifts.map((obj, key) => (
        <ColumnContainer>
          <Typography bold>Turno {key + 1}</Typography>
          <Button startIcon="clock" color="shift-color">
            {obj.entry}
          </Button>
          <Button startIcon="clock" color="shift-color">
            {obj.exit}
          </Button>
        </ColumnContainer>
      ))}
    </>
  );
};
