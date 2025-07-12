import { VerifyUserForm } from "@/features/auth/change-password/components/send-code/VerifyUserForm";
import { CardBody } from "@/shared/components/organism/cards/common/CardBody";
import { CardTitle } from "@/shared/components/organism/cards/common/CardTitle";
import { ElevatedCard } from "@/shared/components/organism/cards/elevated-card/ElevatedCard";
import { VerticalLayout } from "@/shared/components/organism/layouts/vertical-layout/VerticalLayout";

const VerifyUserPage = () => {
  return (
    <VerticalLayout fullHigScreen fullWidScreen>
      <TekovLogo size="md" />
      <ElevatedCard>
        <CardTitle goBack={() => {}}>Cambio de contraseña</CardTitle>

        <CardBody>
          <VerifyUserForm />
        </CardBody>
      </ElevatedCard>
    </VerticalLayout>
  );
};

export default VerifyUserPage;
