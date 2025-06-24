import { configureStore } from "@reduxjs/toolkit";
import {
  companySlice,
  compensationSlice,
  payrollSlice,
  personSlice,
  seasonalSchedulesSlice,
  settingsSlice,
  userSlice,
  workerSlice,
  projectSlice,
} from "./states";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    person: personSlice.reducer,
    worker: workerSlice.reducer,
    company: companySlice.reducer,
    settings: settingsSlice.reducer,
    payroll: payrollSlice.reducer,
    compensation: compensationSlice.reducer,
    seasonalSchedules: seasonalSchedulesSlice.reducer,
    project: projectSlice.reducer,
  },
});
