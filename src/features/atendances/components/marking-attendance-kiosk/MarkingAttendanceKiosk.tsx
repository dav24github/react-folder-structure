import { MarkingShifts } from "@/shared/components/organism/_attendance/MarkingShifts";
import { MarkingAttendanceModal } from "../../../../shared/components/organism/_attendance/MarkingAttendanceModal";

export const MarkingAttendanceKiosk = () => {
  return (
    <>
      {showModal && <MarkingAttendanceModal />}
      <MarkingShifts data={data} onMark={() => {}} />;
    </>
  );
};
