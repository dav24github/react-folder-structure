import { FixedSchedules } from "@/models";

export type FixedScheduleAdapter = {
  id: string;
  fullname: string;
  position: string;
  status: "De alta" | "De baja";
  fixedSchedule: FixedSchedules | null;
};
