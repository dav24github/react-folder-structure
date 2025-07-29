import { IconButton } from "@/shared/components/atoms/buttons/Icon-button/IconButton";
import { Toolbar } from "@/shared/components/molecules/toolbar/Toolbar";
import {
  PageBody,
  PageLayout,
  PageTitle,
} from "@/shared/components/organism/layouts/page-layout/PageLayout";

export const UploadSalariesPage = () => {
  return (
    <PageLayout>
      <PageTitle
        toolbar={
          <Toolbar end>
            <IconButton icon="chevron-left" />
          </Toolbar>
        }
      >
        Planilla de sueldos
      </PageTitle>
      <PageBody>{/* <UploadSalaryList /> */}</PageBody>
    </PageLayout>
  );
};
