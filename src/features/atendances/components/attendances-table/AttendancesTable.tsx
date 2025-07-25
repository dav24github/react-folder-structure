import { DatagridHeader } from "@/shared/components/molecules/datagrid-header/DatagridHeader";
import { DataGridLayout } from "@/shared/components/organism/layouts/datagrid-layout/DataGridLayout";
import { AttendancesLegend } from "./components/AttendancesLegend";
import { SelectInput } from "@/shared/components/atoms/form/selects/SelectInput";
import { DataGrid } from "@/shared/components/organism/datagrid/DataGrid";
import { AttendancesFilter } from "./components/AttendancesFilter";

export const AttendancesTable = () => {
  return (
    <>
      <AttendancesFilter />
      <DataGridLayout>
        <DatagridHeader
          left={<SelectInput label="Área" value="boo" />}
          rigth={<AttendancesLegend />}
        />
        <DataGrid
          title="Asistencias"
          rows={rows}
          columns={columns}
          error={error}
          fetchData={fetchData}
          onSearchChange={onSearchChange}
          pagination={{
            server: {
              pageInfo: {
                pageSize: pageLimit,
                totalRowCount: data ? data.total : 0,
              },
              handlePaginationModelChange: handlePaginationModelChange,
            },
          }}
        />
      </DataGridLayout>
    </>
  );
};
