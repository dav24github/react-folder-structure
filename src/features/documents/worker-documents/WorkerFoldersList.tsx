import { Button } from "@/shared/components/atoms/buttons/button/Button";
import { CardBody } from "@/shared/components/organism/cards/common/CardBody";
import { CardTitle } from "@/shared/components/organism/cards/common/CardTitle";
import { OutlinedCard } from "@/shared/components/organism/cards/outlined-card/OutlinedCard";
import { WorkerFolder } from "./components/WorkerFolder";

export const WorkerFoldersList = (props: any) => {
  return (
    <OutlinedCard>
      <CardTitle
        toolbar={
          <Button startIcon="add" variant="outlined" color="info">
            Carpeta
          </Button>
        }
      >
        {worker.name}
      </CardTitle>
      <CardBody>
        <List data={data} render={<WorkerFolder />} />
      </CardBody>
    </OutlinedCard>
  );
};
