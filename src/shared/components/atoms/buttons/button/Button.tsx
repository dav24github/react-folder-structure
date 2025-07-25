import React from "react";

export const Button = ({ label, startIcon, endIcon, bubble }: any) => {
  return (
    <div>
      {label}
      <Bubble>{bubble}</Bubble>
    </div>
  );
};
