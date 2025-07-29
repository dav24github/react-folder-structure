import { AdvancePayslipModal } from "./AdvancePayslipModal";
import SelectInput from "@mui/material/Select/SelectInput";
import { MyAdvanceItem } from "./MySalaryPayslipItem";
import { List } from "@/shared/components/organism/containers/list/List";

export const MyAdvanceList = () => {
  return (
    <>
      {show && <AdvancePayslipModal />}
      <List
        data={data}
        onSearch={() => {}}
        searchController={
          <SelectInput
            label="Periodo"
            startIcon="calendar"
            value={foo}
            options={[{ id: "", name: "" }]}
          />
        }
        render={<MyAdvanceItem />}
      />
    </>
  );
};
