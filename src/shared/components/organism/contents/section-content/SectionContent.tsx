import { TitleHeader } from "@/shared/components/molecules/title-header/TitleHeader";
import { CardProps } from "@/shared/types";
import { Box } from "@mui/material";
import clsx from "clsx";
import React from "react";

export const SectionContent = ({ title, body }: CardProps) => {
  return (
    <Box className={clsx(classes["section-content"])}>
      {/* <Box className={classes["elevated-header"]} */}
      {title ? (
        <SectionContentTitle variant="h2" color="primary">
          {title}
        </SectionContentTitle>
      ) : (
        children[0]
      )}
      {children.length === 1 ? (
        <SectionContentBody>{children}</SectionContentBody>
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
export const SectionContentTitle = ({ children, props }: TitleSectionProps) => {
  return (
    <TitleHeader variant="h3" color="primary" {...props}>
      {children}
    </TitleHeader>
  );
};

export const SectionContentBody = ({ children }) => {
  return (
    <Box flexDirection="column" gap="15px">
      {children}
    </Box>
  );
};

// // EXAMPLES
// <SectionContent title="my title">
//   <>Some content</>
// </SectionContent>

// <SectionContent>
//   <SectionContentTitle>
//     My Title
//   </SectionContentTitle>

//   <SectionContentBody>
//     My Body
//   </SectionContentBody>
// </SectionContent>
