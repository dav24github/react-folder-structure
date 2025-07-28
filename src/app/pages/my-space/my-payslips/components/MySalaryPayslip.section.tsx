import { OutlinedCard } from "@/shared/components/organism/cards/outlined-card/OutlinedCard";
import { MySalaryPayslipList } from "@/features/payroll/salary/regular-salary/components/reports/payslip/MySalaryPayslipList";

export const MySalaryPayslipSection = () => {
  return (
    <OutlinedCard title="Boletas de pago">
      <MySalaryPayslipList />
    </OutlinedCard>
  );
};
