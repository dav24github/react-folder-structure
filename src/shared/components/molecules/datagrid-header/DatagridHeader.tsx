import React from "react";
import { Button } from "@/shared/components/atoms/buttons/button/Button";

/*
  ToolBar =>  start prop not needed
*/
export const DatagridHeader = (props: any) => {
  return <div>DatagridHeader</div>;
};

// EXAMPLE

<DataGridLayout>
  <DatagridHeader
    right={
      <ToolBar>
        <Button />
        <Button />
        <Button />
      </ToolBar>
    }
    left={<Button />}
  />
  <DataGrid />
</DataGridLayout>;
