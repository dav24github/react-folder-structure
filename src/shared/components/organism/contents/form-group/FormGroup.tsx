import { TitleHeader } from "@/shared/components/molecules/title-header/TitleHeader";
import { Box } from "@mui/material";
import clsx from "clsx";
import React from "react";

export const FormGroup = ({ title, body,  }: CardProps) => {
  return (
    <Box className={clsx(classes["form-group"])}>
      {/* <Box className={classes["elevated-header"]} */}
      {title ? (
        <FormGroupTitle variant="h2" color="primary">
          {title}
        </FormGroupTitle>
      ) : (
        children[0]
      )}
      {children.length === 1 ? (
        <FormGroupBody>{children}</FormGroupBody>
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
export const FormGroupTitle = ({ children, props }: TitleFormGroupProps) => {
  return (
    <TitleHeader variant="h3" color="primary" {...props}>
      {children}
    </TitleHeader>
  );
};

export const FormGroupBody = ({children}) => {
  return (
    <Box flexDirection="column" gap="15px">
      {children}
    </Box>
  );
};

// EXAMPLES
<FormGroup title="my title">
  <>Some content</>
</FormGroup>

<FormGroup>
  <FormGroupTitle>
    My Title
  </FormGroupTitle>

  <FormGroupBody>
    My Body
  </FormGroupBody>
</FormGroup>