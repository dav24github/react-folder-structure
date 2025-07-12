import React from "react";

/*
    FormLayout => contained only FormBody and FormActions
*/
export const FormLayout = ({ children }: any) => {
  return <div>{children.length === 2 ? children : <Error />}</div>;
};

export const FormBody = ({ children }: any) => {
  return <div>{children}</div>;
};

/*
    FormActions => contained only buttons
                => Button style: w100, h100
*/
export const FormActions = ({ children }: any) => {
  return <div>{children}</div>;
};
