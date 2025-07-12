import { ItemButton } from "@/shared/components/atoms/buttons/item-button/ItemButton";
import { CardBody } from "@/shared/components/organism/cards/common/CardBody";
import { CardTitle } from "@/shared/components/organism/cards/common/CardTitle";
import { OutlinedCard } from "@/shared/components/organism/cards/outlined-card/OutlinedCard";
import { List } from "@/shared/components/organism/containers/list/List";
import { HorizontalLayout } from "@/shared/components/organism/layouts/horizontal-layout/HorizontalLayout";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";

const UploadsPage = () => {
  return (
    <PageLayout title="Carga de datos">
      <HorizontalLayout>
        <OutlinedCard>
          <CardTitle icon="massive-edit">Edición masiva</CardTitle>
          <CardBody>
            <List
              data={[
                <ItemButton endIcon="right-arrow" to="/uploads/personal-data">
                  Datos Personales
                </ItemButton>,
                <ItemButton endIcon="right-arrow" to="/uploads/academic-data">
                  Datos Académicos
                </ItemButton>,
                <ItemButton endIcon="right-arrow" to="/uploads/employment-data">
                  Datos Laborales
                </ItemButton>,
                <ItemButton endIcon="right-arrow" to="/uploads/health-data">
                  Datos de Salud
                </ItemButton>,
                <ItemButton endIcon="right-arrow" to="/uploads/financial-data">
                  Datos Financieros
                </ItemButton>,
              ]}
            />
          </CardBody>
        </OutlinedCard>

        <OutlinedCard>
          <CardTitle icon="massive-register">
            Registro de datos históricos masivo
          </CardTitle>
          <CardBody>
            <List
              data={[
                <ItemButton endIcon="right-arrow" to="/uploads/attendance-data">
                  Asistencias
                </ItemButton>,
                <ItemButton endIcon="right-arrow" to="/uploads/attendance-data">
                  Asistencias
                </ItemButton>,
                <ItemButton endIcon="right-arrow" to="/uploads/attendance-data">
                  Asistencias
                </ItemButton>,
                <ItemButton endIcon="right-arrow" to="/uploads/attendance-data">
                  Asistencias
                </ItemButton>,
              ]}
            />
          </CardBody>
        </OutlinedCard>
      </HorizontalLayout>
    </PageLayout>
  );
};

export default UploadsPage;
