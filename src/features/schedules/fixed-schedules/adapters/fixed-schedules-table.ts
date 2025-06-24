import { fixedScheduleAdapter } from "@/adapters/modules/worker.adapters";
import { TWorkersSchedule } from "@/modules/worker/types/worker-request";
import { WorkersSchedulesResponse } from "@/types";

export const workersScheduleAdapter = (
  data: WorkersSchedulesResponse
): TWorkersSchedule => {
  return {
    list: data.users.map((item) => fixedScheduleAdapter(item)),
    total: data.number_rows,
  };
};
