import { SelectInput } from "@/shared/components/atoms/form/selects/SelectInput";
import { List } from "@/shared/components/organism/containers/list/List";
import { SalaryPayslipModal } from "./SalaryPayslipModal";
import { MySalaryPayslipItem } from "./components/MySalaryPayslipItem";

export const MySalaryPayslipList = () => {
  return (
    <>
      {show && <SalaryPayslipModal />}
      <List
        data={data}
        onSearch={() => {}}
        searchController={
          <SelectInput
            label="Periodo"
            startIcon="calendar"
            value={foo}
            options={[{ id: "", name: "" }]}
            helper="Selecciona el año de la boleta de pago"
          />
        }
        render={<MySalaryPayslipItem />}
      />
    </>
  );
};
