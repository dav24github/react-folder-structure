import { Button } from "@/shared/components/atoms/buttons/button/Button";
import { SelectInput } from "@/shared/components/atoms/form/selects/SelectInput";
import { DatagridHeader } from "@/shared/components/molecules/datagrid-header/DatagridHeader";
import { PopOver } from "@/shared/components/molecules/overlays/pop-over/PopOver";
import { Toolbar } from "@/shared/components/molecules/toolbar/Toolbar";
import { DataGrid } from "@/shared/components/organism/datagrid/DataGrid";
import { DataGridLayout } from "@/shared/components/organism/layouts/datagrid-layout/DataGridLayout";
import { WorkerAvailabilityFilter } from "./components/WorkerAvailabilityFilter";

export const FixedSchedulesTable = () => {
  return (
    <DataGridLayout>
      <DatagridHeader
        left={
          <Toolbar>
            <>
              <Button ref={button} size="sm" variant="text" bubble={1}>
                Trabajdores
              </Button>
              <PopOver
                open={openPopOver}
                anchorEl={button.current}
                position="bottom-center"
              >
                <WorkerAvailabilityFilter />
              </PopOver>
            </>
            <SelectInput label="Área" value="foo" />
            <SelectInput label="Sucursal" value="boo" />
          </Toolbar>
        }
      />
      <DataGrid
        title="horarios"
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
