import { SalaryPayslipModal } from "../my-salary-payslip-list/components/MySalaryPayslipModal";

export const SalaryReportForm = () => {
  return (
    <>
      {show && <SalaryPayslipModal />}
      <div>SalaryReportForm</div>;
    </>
  );
};
