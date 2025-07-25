import { DatagridHeader } from "@/shared/components/molecules/datagrid-header/DatagridHeader";
import { MetricCard } from "@/shared/components/molecules/metric-card/MetricCard";
import { DataGrid } from "@/shared/components/organism/datagrid/DataGrid";
import { DataGridLayout } from "@/shared/components/organism/layouts/datagrid-layout/DataGridLayout";

export const UserTable = () => {
  return (
    <DataGridLayout>
      <DatagridHeader
        right={<MetricCard size="small" label="Usarios de alta" value={10} />}
      />
      <DataGrid
        title="Lista_usuarios"
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
  );
};
