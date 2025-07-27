import { TitleHeader } from "@/shared/components/molecules/title-header/TitleHeader";

/*
 * CardTitle => Only for nomenclature purpuse <Card><CardTitle></>
 * Props => CardTitle => contained only <Toolbar>...</Toolbar> or just ONE Component
 *          justify end by default
 * toolbar => contained only md buttons
 */
export const CardTitle = ({ children, props }: TitleSectionProps) => {
  return (
    <TitleHeader variant="h2" color="primary" {...props}>
      {children}
    </TitleHeader>
  );
};

// <CardTitle
//   icon="persons"
//   center
//   toolbar={
//     <Toolbar>
//       <Button />
//       <Button />
//     </Toolbar>
//   }
// >
//   Mi Title
// </CardTitle>;
