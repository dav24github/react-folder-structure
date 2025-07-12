import React from "react";
import { SectionContentTitle } from "../../contents/section-content/SectionContent";
import {
  TitleHeader,
  TitleSection,
} from "@/shared/components/molecules/title-header/TitleHeader";

/*
 * CardTitle => Only for nomenclature purpuse <Card><CardTitle></>
 */
export const CardTitle = ({ children, props }: TitleSectionProps) => {
  return (
    <TitleHeader variant="h2" color="primary" {...props}>
      {children}
    </TitleHeader>
  );
};
