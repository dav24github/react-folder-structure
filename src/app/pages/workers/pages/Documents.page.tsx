import { AllDocumentsList } from "@/features/documents/all-documents-list/AllDocumentsList";
import { DocumentManager } from "@/features/documents/document-manager/DocumentManager";
import { WorkerFoldersList } from "@/features/documents/worker-documents/WorkerFoldersList";
import { IconButton } from "@/shared/components/atoms/buttons/Icon-button/IconButton";
import { ItemButton } from "@/shared/components/atoms/buttons/item-button/ItemButton";
import { Typography } from "@/shared/components/atoms/typography/Typography";
import { CardBody } from "@/shared/components/organism/cards/common/CardBody";
import { CardTitle } from "@/shared/components/organism/cards/common/CardTitle";
import { OutlinedCard } from "@/shared/components/organism/cards/outlined-card/OutlinedCard";
import { ColumnContainer } from "@/shared/components/organism/containers/column-container/ColumnContainer";
import { SectionContent } from "@/shared/components/organism/contents/section-content/SectionContent";
import { LeftRightLayout } from "@/shared/components/organism/layouts/left-right-layout/LeftRightLayout";
import { PageLayout } from "@/shared/components/organism/layouts/page-layout/PageLayout";
import { Divider } from "@mui/material";

export const DocumentsPage = () => {
  return (
    <PageLayout title="Documentos">
      <LeftRightLayout left="250px">
        <OutlinedCard>
          <CardTitle
            toolbar={<IconButton icon="folders-plus" size="lg" color="info" />}
          >
            Administrador
          </CardTitle>
          <CardBody>
            <ItemButton
              variant="outlined"
              color="info"
              active={active}
              startIcon="list"
              endIcon="right-arrow"
            >
              <ColumnContainer>
                <Typography>Todos los archivos</Typography>
                <Typography variant="body2" color="secondary">
                  1 archivo
                </Typography>
              </ColumnContainer>
            </ItemButton>
            <Divider />
            <SectionContent title="Trabajadores">
              <DocumentManager />
            </SectionContent>
          </CardBody>
        </OutlinedCard>

        {id === "all" ? (
          <OutlinedCard title="Todos los archivos">
            <AllDocumentsList />
          </OutlinedCard>
        ) : (
          <WorkerFoldersList id={id} />
        )}
      </LeftRightLayout>
    </PageLayout>
  );
};
