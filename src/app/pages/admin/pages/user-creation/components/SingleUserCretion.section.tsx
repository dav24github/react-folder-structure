import { NewUserForm } from "@/features/user/components/new-user-form/NewUserForm";
import { ElevatedCard } from "@/shared/components/organism/cards/elevated-card/ElevatedCard";

const SingleUserCretionSection = () => {
  return (
    <ElevatedCard title="Nuevo usuario">
      <NewUserForm />
    </ElevatedCard>
  );
};

export default SingleUserCretionSection;
