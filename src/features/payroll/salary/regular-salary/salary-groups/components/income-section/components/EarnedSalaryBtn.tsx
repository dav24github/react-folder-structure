import { useGoToUrl } from "@/hooks";
import { useParams } from "react-router-dom";
import { PayrollRecordBtn } from "@/modules/payroll/components/UI/PayrollRecordBtn";
import { TPayrollGroup } from "@/models/payroll";

export const EarnedSalaryUI = ({ data }: { data: TPayrollGroup }) => {
  const { handleGoTo } = useGoToUrl();
  const { idPayroll } = useParams();

  return (
    <>
      {data.records?.earnedSalary.available && (
        <PayrollRecordBtn
          closed={data.status === "close"}
          label="Ver sueldo ganado"
          onClick={() =>
            handleGoTo(`payroll/salary/:1/group/:2/earned-salary/record`, {
              params: [idPayroll!, data.id],
            })
          }
        />
      )}
    </>
  );
};
