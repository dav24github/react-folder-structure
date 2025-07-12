import { TitleHeader } from "@/shared/components/molecules/title-header/TitleHeader";
import { Box } from "@mui/material";
import clsx from "clsx";
import React from "react";

export const SegmentContent = ({ title, body,  }: CardProps) => {
  return (
    <Box className={clsx(classes["segment-content"])}>
      {/* <Box className={classes["elevated-header"]} */}
      {title ? (
        <SegmentContentTitle variant="h2" color="primary">
          {title}
        </SegmentContentTitle>
      ) : (
        children[0]
      )}
      {children.length === 1 ? (
        <SegmentContentBody>{children}</SegmentContentBody>
      ) : children.length === 2 ? (
        children[1]
      ) : children.length === 3 ? (
        children[3]
      ) : (
        <Error />
      )}
    </Box>
  );
};

/*
 * CardTitle => Only for nomenclature purpuse <Card><CardTitle></>
 */
export const SegmentContentTitle = ({ children, props }: TitleSegmentProps) => {
  return (
    <TitleHeader variant="h3" color="secondary" {...props}>
      {children}
    </TitleHeader>
  );
};

export const SegmentContentBody = ({children}) => {
  return (
    <Box flexDirection="column" gap="10px">
      {children}
    </Box>
  );
};

// EXAMPLES
<SegmentContent title="my title">
  <>Some content</>
</SegmentContent>

<SegmentContent>
  <SegmentContentTitle>
    My Title
  </SegmentContentTitle>

  <SegmentContentBody>
    My Body
  </SegmentContentBody>
</SegmentContent>