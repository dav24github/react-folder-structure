import { LoginForm } from "@/features/auth/login";
import { CardBody } from "@/shared/components/organism/cards/common/CardBody";
import { CardTitle } from "@/shared/components/organism/cards/common/CardTitle";
import { OutlinedCard } from "@/shared/components/organism/cards/outlined-card/OutlinedCard";
import { LeftRightLayout } from "@/shared/components/organism/layouts/left-right-layout/LeftRightLayout";
import { VerticalLayout } from "@/shared/components/organism/layouts/vertical-layout/VerticalLayout";

const LoginPage = () => {
  return (
    <LeftRightLayout fullHigScreen fullWidScreen>
      <VerticalLayout>
        <Typography>¡Bienvenido a tu espacio!</Typography>
      </VerticalLayout>

      <VerticalLayout>
        <TekovLogo size="md" />

        <OutlinedCard>
          <CardTitle center>Login</CardTitle>
          <CardBody>
            <LoginForm />
          </CardBody>
        </OutlinedCard>

        <Link to="...">¿Olvidaste tu contraseña?</Link>
      </VerticalLayout>
    </LeftRightLayout>
  );
};

export default LoginPage;
