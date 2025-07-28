import { MyAdvanceList } from "@/features/payroll/advance/advance-report/components/MyAdvanceList";
import { OutlinedCard } from "@/shared/components/organism/cards/outlined-card/OutlinedCard";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";

const MyAdvancesPage = () => {
  return (
    <PageLayout title="Mis anticipos">
      <OutlinedCard title="">
        <MyAdvanceList />
      </OutlinedCard>
    </PageLayout>
  );
};

export default MyAdvancesPage;
