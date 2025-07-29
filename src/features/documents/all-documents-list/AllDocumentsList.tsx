import { WorkerDocument } from "@/shared/components/organism/cards/worker-document/WorkerDocument";

export const AllDocumentsList = () => {
  return <List data={data} render={<WorkerDocument />} pagination />;
};
