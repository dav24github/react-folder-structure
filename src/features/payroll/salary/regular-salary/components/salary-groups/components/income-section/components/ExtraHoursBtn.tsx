import { useCallEndpoint, useGoToUrl } from "@/hooks";
import { TPayrollGroup, TPayrollSalary } from "@/models/payroll";
import { useParams } from "react-router-dom";
import { formatYYYYMMDD, findItemById } from "@/utils";
import { useDispatch } from "react-redux";
import { updatePayrollSalaryGroup } from "@/redux/states/payroll-slice";
import { useState } from "react";
import { PayrollRecordBtn } from "@/modules/payroll/components/UI/PayrollRecordBtn";
import { PayrollCalulationBtn } from "@/modules/payroll/components/UI/PayrollCalulationBtn";
import { Box } from "@mui/material";
import { IconButton } from "@/components/ui";
import classes from "@/scss/elevatedActionBtn.module.scss";
import clsx from "clsx";
import { downloadFileBase64, getErrorFileName } from "@/utils/file";
import { PopUpUtilities } from "@/services";
import { MessagePopup } from "@/types";
import { getNightSurchargeInfo } from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/utils";
import { useRegularSalary } from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/hooks/useRegularSalary";
import {
  approvedExtraHoursCalculationService,
  deleteExtraHoursRecordService,
  uploadExtraHoursCalculationService,
} from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/services/salary.service";
import {
  ExtraHoursForm,
  ExtraHoursForm1,
} from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/modules/incomes/extra-hours/types";
import { ExtraHoursModal } from "../../../../../../../../../../../_PROJECTS/TEKOV/tekov-web-2/src/modules/payroll/modules/salary/modules/regular-salary/components/modals/incomes/extra-hours-modal/ExtraHoursModal";

export const ExtraHoursUI = ({ data }: { data: TPayrollGroup }) => {
  const { handleGoTo } = useGoToUrl();
  const { idPayroll } = useParams();
  const { callEndpoint } = useCallEndpoint();
  const { payroll } = useRegularSalary();
  const dispatch = useDispatch();
  const [extraHoursModalIsShown, setExtraHoursModalIsShown] =
    useState<boolean>(false);

  const deleteExtraHours = async () => {
    await callEndpoint(deleteExtraHoursRecordService(idPayroll!, data.id!));
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
            extraHours: {
              ...payrollSalaryGroup!.records!.extraHours!,
              calculated: false,
              record: null,
            },
          },
        },
      })
    );
  };

  const onModalAccept = async (
    values?: ExtraHoursForm,
    values1?: ExtraHoursForm1
  ) => {
    let res;

    let formData: any = {
      id_group: data.id!,
    };
    if (values) {
      const filter = getNightSurchargeInfo(values.nightSurchargePercent).filter;
      formData = {
        ...formData,
        started_date: formatYYYYMMDD(values.startDate),
        finished_date: formatYYYYMMDD(values.endDate),
        filter,
      };

      res = await callEndpoint(
        approvedExtraHoursCalculationService(idPayroll!, formData)
      );
    } else if (values1) {
      const filter = getNightSurchargeInfo(
        values1.nightSurchargePercent
      ).filter;
      formData = {
        ...formData,
        users: values1.uploadExtraHoursFile,
        filter,
      };

      res = await callEndpoint(
        uploadExtraHoursCalculationService(idPayroll!, formData)
      );

      if ("has_error" in res && res.has_error) {
        downloadFileBase64(getErrorFileName(values1.fileName), res.file);
        PopUpUtilities.warning(MessagePopup.UPLOAD_EXCEL_ERROR);
        return;
      }
    }

    setExtraHoursModalIsShown(false);
    handleGoTo(`payroll/salary/:1/group/:2/extra-hours/calculation`, {
      params: [idPayroll!, data.id],
      state: values
        ? {
            ...values,
            data: res,
            startDate: formatYYYYMMDD(values.startDate),
            endDate: formatYYYYMMDD(values.endDate),
          }
        : {
            ...values1,
            data: res,
          },
    });
  };

  return (
    <>
      {extraHoursModalIsShown && (
        <ExtraHoursModal
          onAccept={onModalAccept}
          onClose={() => setExtraHoursModalIsShown(false)}
        />
      )}
      {data.records?.extraHours.available &&
        (data.status === "open" && !data.records?.extraHours.calculated ? (
          <PayrollCalulationBtn
            disabled={data.records.rcIva.calculated}
            label="Calculo de pago de horas extras"
            onClick={() => setExtraHoursModalIsShown(true)}
          />
        ) : (
          <Box className={classes.group}>
            <PayrollRecordBtn
              label="Ver pago de horas extras"
              onClick={() =>
                handleGoTo(`payroll/salary/:1/group/:2/extra-hours/record`, {
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
                  onClick={deleteExtraHours}
                />
              </Box>
            )}
          </Box>
        ))}
    </>
  );
};
