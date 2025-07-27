import { CardBody } from "@/shared/components/organism/cards/common/CardBody";
import { CardTitle } from "@/shared/components/organism/cards/common/CardTitle";
import { OutlinedCard } from "@/shared/components/organism/cards/outlined-card/OutlinedCard";

export const MyWeeklySchedule = () => {
  return (
    <OutlinedCard>
      <CardTitle icon="sun" toolbar={<Slider slides={foo} />}>
        Semana
      </CardTitle>
      <CardBody></CardBody>
    </OutlinedCard>
  );
};
