import { Button } from "@/shared/components/atoms/buttons/button/Button";
import { DatagridHeader } from "@/shared/components/molecules/datagrid-header/DatagridHeader";
import { PopOver } from "@/shared/components/molecules/overlays/pop-over/PopOver";
import { DataGrid } from "@/shared/components/organism/datagrid/DataGrid";
import { DataGridLayout } from "@/shared/components/organism/layouts/datagrid-layout/DataGridLayout";
import { WorkerFilter } from "./components/WorkerFilter";

export const WorkerTable = () => {
  return (
    <DataGridLayout>
      <DatagridHeader
        right={
          <>
            <Button ref={button} size="sm" variant="text" bubble={1}>
              Filtro
            </Button>
            <PopOver
              open={openPopOver}
              anchorEl={button.current}
              position="bottom-center"
            >
              <WorkerFilter />
            </PopOver>
          </>
        }
      />
      <DataGrid
        rows={rows}
        columns={columns}
        error={error}
        fetchData={fetchData}
        onSearchChange={onSearchChange}
        pagination={{
          server: {
            pageInfo: {
              pageSize: pageLimit,
              totalRowCount: data?.total,
            },
            handlePaginationModelChange: handlePaginationModelChange,
          },
        }}
        disabledExport
      />
    </DataGridLayout>
  );
};
