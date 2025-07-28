import { MarkingShifts } from "@/shared/components/organism/_attendance/MarkingShifts";
import { MarkingAttendanceModal } from "../components/MarkingAttendanceModal";

export const MyMarkingAttendance = () => {
  return (
    <>
      {showModal && <MarkingAttendanceModal />}
      <MarkingShifts data={data} onMark={() => {}} />;
    </>
  );
};
