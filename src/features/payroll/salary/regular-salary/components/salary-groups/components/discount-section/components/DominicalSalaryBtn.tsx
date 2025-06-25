import { useCallEndpoint, useGoToUrl } from "@/hooks";
import { TPayrollGroup, TPayrollSalary } from "@/models/payroll";
import { useParams } from "react-router-dom";
import { deleteDominicalSalaryRecordService } from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/services/salary.service";
import { findItemById } from "@/utils";
import { useDispatch } from "react-redux";
import { updatePayrollSalaryGroup } from "@/redux/states/payroll-slice";
import { PayrollCalulationBtn } from "@/modules/payroll/components/UI/PayrollCalulationBtn";
import { PayrollRecordBtn } from "@/modules/payroll/components/UI/PayrollRecordBtn";
import { Box } from "@mui/material";
import { IconButton } from "@/components/ui";
import clsx from "clsx";
import classes from "@/scss/elevatedActionBtn.module.scss";
import { useRegularSalary } from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/hooks/useRegularSalary";

export const DominicalSalaryUI = ({ data }: { data: TPayrollGroup }) => {
  const { handleGoTo } = useGoToUrl();
  const { idPayroll } = useParams();
  const { callEndpoint } = useCallEndpoint();
  const { payroll } = useRegularSalary();
  const dispatch = useDispatch();

  const deleteDominicalSalary = async () => {
    await callEndpoint(
      deleteDominicalSalaryRecordService(idPayroll!, data.id!)
    );

    const { item: payrollSalary, index: index } = findItemById<TPayrollSalary>(
      payroll.salary.lastest,
      idPayroll
    );
    const { item: payrollSalaryGroup, index: index1 } =
      findItemById<TPayrollGroup>(payrollSalary?.groups, data.id);
    dispatch(
      updatePayrollSalaryGroup({
        index,
        index1,
        data: {
          ...payrollSalaryGroup!,
          records: {
            ...payrollSalaryGroup!.records!,
            dominicalSalary: {
              ...payrollSalaryGroup!.records!.dominicalSalary!,
              calculated: false,
              record: null,
            },
          },
        },
      })
    );
  };

  return (
    <>
      {data.records?.dominicalSalary.available &&
        (data.status === "open" && !data.records?.dominicalSalary.calculated ? (
          <PayrollCalulationBtn
            disabled={data.records.rcIva.calculated}
            label="Cálculo del salario dominical"
            onClick={() =>
              handleGoTo(
                `payroll/salary/:1/group/:2/dominical-salary/calculation`,
                {
                  params: [idPayroll!, data.id],
                }
              )
            }
          />
        ) : (
          <Box className={classes.group}>
            <PayrollRecordBtn
              label="Ver pago del salario dominical"
              onClick={() =>
                handleGoTo(
                  `payroll/salary/:1/group/:2/dominical-salary/record`,
                  {
                    params: [idPayroll!, data.id],
                  }
                )
              }
              closed={data.status === "close"}
            />
            {data.status === "open" && (
              <Box
                className={clsx(classes.root, classes.iconBtn)}
                title={data.records.rcIva.calculated ? "Función bloqueada" : ""}
              >
                <IconButton
                  disabled={data.records.rcIva.calculated}
                  icon="delete"
                  color="error"
                  onClick={deleteDominicalSalary}
                />
              </Box>
            )}
          </Box>
        ))}
    </>
  );
};
