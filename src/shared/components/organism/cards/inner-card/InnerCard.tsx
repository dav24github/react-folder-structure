import React from "react";

/*
    InnerCard => contained only InnerCardTitle and CardBody or children (CardBody)
    toolbar => contained only sm buttons
*/
export const InnerCard = (props: any) => {
  return (
    <div className={clsx(classes.card, classes["inner-card"])}>InnerCard</div>
  );
};

export const InnerCardTitle = ({ children, props }: TitleSectionProps) => {
  return (
    <TitleHeader variant="subtitle1" color="primary" {...props}>
      {children}
    </TitleHeader>
  );
};

export const InnerCardBody = (props: any) => {
  return <div>{children}</div>;
};
