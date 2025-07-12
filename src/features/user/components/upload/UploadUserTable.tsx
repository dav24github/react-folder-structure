import { DataGrid } from "@/shared/components/organism/datagrid/DataGrid";

export const UploadUserTable = () => {
  return (
    <DataGrid
      rows={data}
      columns={columns}
      error={error}
      fetchData={fetchData}
      disabledExport
      disabledQuickFilter
    />
  );
};
