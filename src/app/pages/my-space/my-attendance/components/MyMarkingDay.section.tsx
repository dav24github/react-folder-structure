import { MyMarkingAttendance } from "@/features/atendances/components/my-marking-attendance/MyMarkingAttendance";
import { CardBody } from "@/shared/components/organism/cards/common/CardBody";
import { CardTitle } from "@/shared/components/organism/cards/common/CardTitle";
import { ElevatedCard } from "@/shared/components/organism/cards/elevated-card/ElevatedCard";

export const MyMarkingDaySection = () => {
  return (
    <ElevatedCard>
      <CardTitle center subtitle={date}>
        {day}
      </CardTitle>
      <CardBody>
        <MyMarkingAttendance />
      </CardBody>
    </ElevatedCard>
  );
};
