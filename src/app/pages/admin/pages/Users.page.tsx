import { UserTable } from "@/features/user/components/user-table/UserTable";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";

const UsersPage = () => {
  return (
    <PageLayout title="Lista de Usuarios">
      <UserTable />
    </PageLayout>
  );
};

export default UsersPage;
