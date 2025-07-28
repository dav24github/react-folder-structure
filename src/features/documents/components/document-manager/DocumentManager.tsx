import { List } from "@/shared/components/organism/containers/list/List";
import { WorkerFoldersItem } from "./components/WorkerFoldersItem";

export const DocumentManager = () => {
  // fetch;

  return (
    <>
      <List
        data={data}
        render={<WorkerFoldersItem />}
        pagination
        onSearch={() => {}}
      />
      {/* <pagination /> ? */}
    </>
  );
};
