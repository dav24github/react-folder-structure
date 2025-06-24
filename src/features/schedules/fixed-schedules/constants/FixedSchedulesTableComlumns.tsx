import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import classes from "../pages/SchedulesList.module.scss";
import { MyTypography } from "@/components/ui";
import { FixedSchedules, WorkerSchedules } from "@/models";
import { TDayKeys } from "@/types";
import { ShiftTLabels } from "@/modules/attendance/modules/my-attendance/shared/components/ShiftTLabels";
import { ShiftsCell } from "@/modules/schedules/components/shifts-cell/ShiftsCell";

export const SchedulesListColumn: GridColDef[] = [
  {
    field: "fullname",
    headerName: "Nombre",
    width: 200,
    renderCell: (params: GridRenderCellParams<WorkerSchedules>) => {
      return (
        <Box className={classes.cell}>
          <MyTypography variant="body2" bold>
            {params.row.fullname}
          </MyTypography>
          <MyTypography variant="body3" color="secondary">
            {params.row.position}
          </MyTypography>
        </Box>
      );
    },
  },
  {
    field: "labels",
    headerName: "",
    width: 20,
    renderCell: (_: GridRenderCellParams<WorkerSchedules>) => {
      return <ShiftTLabels showT3={true} fixed />;
    },
  },
  {
    field: "monday",
    headerName: "Lunes",
    align: "center",
    headerAlign: "center",
    renderCell: (params: GridRenderCellParams<WorkerSchedules>) => {
      return <ShiftsDayCell data={params.row.fixedSchedule} dayKey="monday" />;
    },
  },
  {
    field: "tuesday",
    headerName: "Martes",
    align: "center",
    headerAlign: "center",
    renderCell: (params: GridRenderCellParams<WorkerSchedules>) => {
      return <ShiftsDayCell data={params.row.fixedSchedule} dayKey="tuesday" />;
    },
  },
  {
    field: "wednesday",
    headerName: "Miercoles",
    align: "center",
    headerAlign: "center",
    renderCell: (params: GridRenderCellParams<WorkerSchedules>) => {
      return (
        <ShiftsDayCell data={params.row.fixedSchedule} dayKey="wednesday" />
      );
    },
  },
  {
    field: "thursday",
    headerName: "Jueves",
    align: "center",
    headerAlign: "center",
    renderCell: (params: GridRenderCellParams<WorkerSchedules>) => {
      return (
        <ShiftsDayCell data={params.row.fixedSchedule} dayKey="thursday" />
      );
    },
  },
  {
    field: "friday",
    headerName: "Viernes",
    align: "center",
    headerAlign: "center",
    renderCell: (params: GridRenderCellParams<WorkerSchedules>) => {
      return <ShiftsDayCell data={params.row.fixedSchedule} dayKey="friday" />;
    },
  },
  {
    field: "saturday",
    headerName: "Sábado",
    align: "center",
    headerAlign: "center",
    renderCell: (params: GridRenderCellParams<WorkerSchedules>) => {
      return (
        <ShiftsDayCell data={params.row.fixedSchedule} dayKey="saturday" />
      );
    },
  },
  {
    field: "sunday",
    headerName: "Domingo",
    align: "center",
    headerAlign: "center",
    renderCell: (params: GridRenderCellParams<WorkerSchedules>) => {
      return <ShiftsDayCell data={params.row.fixedSchedule} dayKey="sunday" />;
    },
  },
];

const ShiftsDayCell = ({
  data,
  dayKey,
}: {
  data: FixedSchedules | null;
  dayKey: TDayKeys;
}) => {
  const free = !data?.days[dayKey].shift1;

  return (
    <>
      {!data ? (
        <MyTypography color="secondary" variant="body2">
          Sin horario
        </MyTypography>
      ) : free ? (
        <MyTypography color="secondary" variant="body2">
          Libre
        </MyTypography>
      ) : (
        <ShiftsCell data={data.days[dayKey]} />
      )}
    </>
  );
};
