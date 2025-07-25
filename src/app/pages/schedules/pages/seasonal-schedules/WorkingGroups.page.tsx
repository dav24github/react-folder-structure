import { WorkingGroupList } from "@/features/schedules/seasonal-schedules/working-groups/components/working-group-list/WorkingGroupList";
import { SectionContent } from "@/shared/components/organism/contents/section-content/SectionContent";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";

const WorkingGroupsPage = () => {
  return (
    <PageLayout title="Horarios plus">
      <SectionContent title="Grupos de trabajo">
        <WorkingGroupList />
      </SectionContent>
    </PageLayout>
  );
};

export default WorkingGroupsPage;
