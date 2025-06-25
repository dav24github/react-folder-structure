import { useGoToUrl } from "@/hooks";
import { TPayrollGroup } from "@/models/payroll";
import { PayrollRecordBtn } from "@/modules/payroll/components/UI/PayrollRecordBtn";
import { useParams } from "react-router-dom";

export const SeniorityBondUI = ({ data }: { data: TPayrollGroup }) => {
  const { handleGoTo } = useGoToUrl();
  const { idPayroll } = useParams();

  return (
    <>
      {data.records?.seniorityBond.available && (
        <PayrollRecordBtn
          closed={data.status === "close"}
          label="Ver bono de antigüedad"
          onClick={() =>
            handleGoTo(`payroll/salary/:1/group/:2/seniority-bond/record`, {
              params: [idPayroll!, data.id],
            })
          }
        />
      )}
    </>
  );
};
