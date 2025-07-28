import { TeamMembersList } from "@/features/worker/components/team-members-list/TeamMembersList";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";

export const MyTeamPage = () => {
  return (
    <PageLayout title="Mi equipo">
      <TeamMembersList />
    </PageLayout>
  );
};
