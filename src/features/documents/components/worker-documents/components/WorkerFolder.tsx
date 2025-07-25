import { IconButton } from "@/shared/components/atoms/buttons/Icon-button/IconButton";
import { ItemButton } from "@/shared/components/atoms/buttons/item-button/ItemButton";
import { PopOver } from "@/shared/components/molecules/overlays/pop-over/PopOver";
import { Accordion } from "@/shared/components/organism/accordion/Accordion";
import { WorkerDocument } from "@/shared/components/organism/cards/worker-document/WorkerDocument";
import { ListContainer } from "@/shared/components/organism/containers/list-container/ListContainer";

export const WorkerFolder = () => {
  return (
    <Accordion
      icon="folder"
      title={folder.name}
      description={`${folder.files.length} archivos`}
      toolbar={
        <>
          <IconButton ref={button} icon="vert" />
          <PopOver
            open={openPopOver}
            anchorEl={button.current}
            position="bottom-center"
          >
            <ListContainer>
              <ItemButton>Agregar archivo</ItemButton>
              <ItemButton>Editar nombre</ItemButton>
              <ItemButton>Eliminar</ItemButton>
            </ListContainer>
          </PopOver>
        </>
      }
    >
      <List data={data} render={<WorkerDocument />} wrapper />
    </Accordion>
  );
};
