import { useCallEndpoint, useGoToUrl } from "@/hooks";
import { TPayrollGroup, TPayrollSalary } from "@/models/payroll";
import { useParams } from "react-router-dom";
import { findItemById } from "@/utils";
import { useDispatch } from "react-redux";
import { updatePayrollSalaryGroup } from "@/redux/states/payroll-slice";
import { useState } from "react";
import { PayrollCalulationBtn } from "@/modules/payroll/components/UI/PayrollCalulationBtn";
import { PayrollRecordBtn } from "@/modules/payroll/components/UI/PayrollRecordBtn";
import { Box } from "@mui/material";
import { IconButton } from "@/components/ui";
import clsx from "clsx";
import classes from "@/scss/elevatedActionBtn.module.scss";
import { getNightSurchargeInfo } from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/utils";
import { downloadFileBase64, getErrorFileName } from "@/utils/file";
import { PopUpUtilities } from "@/services";
import { MessagePopup } from "@/types";
import { useRegularSalary } from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/hooks/useRegularSalary";
import {
  deleteWorkedHoursRecordService,
  workedHoursCalculationService,
} from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/services/salary.service";
import { WorkedHoursForm } from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/modules/incomes/worked-hours/types";
import { WorkedHoursModal } from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/components/modals/incomes/WorkedHoursModal";

export const WorkedHoursUI = ({ data }: { data: TPayrollGroup }) => {
  const { handleGoTo } = useGoToUrl();
  const { idPayroll } = useParams();
  const { callEndpoint } = useCallEndpoint();
  const { payroll } = useRegularSalary();
  const dispatch = useDispatch();
  const [workedHoursModalIsShown, setWorkedHoursModalIsShown] =
    useState<boolean>(false);

  const deleteWorkedHours = async () => {
    await callEndpoint(deleteWorkedHoursRecordService(idPayroll!, data.id!));
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
            workedHours: {
              ...payrollSalaryGroup!.records!.workedHours!,
              calculated: false,
              record: null,
            },
          },
        },
      })
    );
  };

  const onModalAccept = async (values: WorkedHoursForm) => {
    const filter = getNightSurchargeInfo(values.nightSurchargePercent).filter;

    const formData = {
      id_group: data.id!,
      filter,
      users: values.uploadWorkedHoursFile,
    };
    const res = await callEndpoint(
      workedHoursCalculationService(idPayroll!, formData)
    );

    if ("has_error" in res && res.has_error) {
      downloadFileBase64(getErrorFileName(values.fileName), res.file);
      PopUpUtilities.warning(MessagePopup.UPLOAD_EXCEL_ERROR).then((result) => {
        if (result.isConfirmed) {
          handleGoTo("payroll/salary", { param: idPayroll });
        }
      });
      return;
    }

    setWorkedHoursModalIsShown(false);
    handleGoTo(`payroll/salary/:1/group/:2/worked-hours/calculation`, {
      params: [idPayroll!, data.id],
      state: {
        ...values,
        data: res,
      },
    });
  };

  return (
    <>
      {workedHoursModalIsShown && (
        <WorkedHoursModal
          onAccept={onModalAccept}
          onClose={() => setWorkedHoursModalIsShown(false)}
        />
      )}
      {data.records?.workedHours.available &&
        (data.status === "open" && !data.records?.workedHours.calculated ? (
          <PayrollCalulationBtn
            disabled={data.records.rcIva.calculated}
            label="Cálculo de pago de horas trabajadas"
            onClick={() => setWorkedHoursModalIsShown(true)}
          />
        ) : (
          <Box className={classes.group}>
            <PayrollRecordBtn
              label="Ver pago de horas trabajadas"
              onClick={() =>
                handleGoTo(`payroll/salary/:1/group/:2/worked-hours/record`, {
                  params: [idPayroll!, data.id],
                })
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
                  onClick={deleteWorkedHours}
                />
              </Box>
            )}
          </Box>
        ))}
    </>
  );
};
