import { IconButton } from "@/shared/components/atoms/buttons/Icon-button/IconButton";
import { ItemButton } from "@/shared/components/atoms/buttons/item-button/ItemButton";
import { Typography } from "@/shared/components/atoms/typography/Typography";
import { PopOver } from "@/shared/components/molecules/overlays/pop-over/PopOver";
import {
  InnerCard,
  InnerCardBody,
  InnerCardTitle,
} from "@/shared/components/organism/cards/inner-card/InnerCard";
import { ListContainer } from "@/shared/components/organism/containers/list-container/ListContainer";

export const WorkerDocument = () => {
  return (
    <InnerCard>
      <InnerCardTitle
        toolbar={
          <>
            <IconButton ref={button} size="sm" icon="vert" />
            <PopOver
              open={openPopOver}
              anchorEl={button.current}
              position="bottom-center"
            >
              <ListContainer>
                <ItemButton>Descargar</ItemButton>
                <ItemButton>Editar nombre</ItemButton>
                <ItemButton>Eliminar</ItemButton>
              </ListContainer>
            </PopOver>
          </>
        }
      >
        {document.name}
      </InnerCardTitle>
      <InnerCardBody>
        <Typography icon="history">{document.updatedAt}</Typography>
      </InnerCardBody>
    </InnerCard>
  );
};
