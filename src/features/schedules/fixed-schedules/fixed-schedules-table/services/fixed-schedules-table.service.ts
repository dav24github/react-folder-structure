import { CallMethods } from "@/types";
import { axiosCall, getPaginationQuery } from "@/utils";
import { workersScheduleAdapter } from "../fixed-schedule-history/adapters";

export const workersSchedulePaginationService = (
  status?: boolean | undefined,
  workArea?: string,
  office?: string,
  from?: number | undefined,
  to?: number | undefined,
  search?: string | undefined
) => {
  return axiosCall(
    CallMethods.GET,
    "/v1/user/$id/default-shifts",
    {
      params: {
        status: status?.toString(),
        id_work_area: workArea ? workArea : undefined,
        id_branch_office: office ? office : undefined,
        search: search ? search : undefined,
        ...getPaginationQuery(from, to),
      },
    },
    workersScheduleAdapter
  );
};
