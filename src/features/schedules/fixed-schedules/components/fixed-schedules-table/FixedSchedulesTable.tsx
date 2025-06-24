import { useEffect, useState } from "react";
import {
  GridCellParams,
  GridPaginationModel,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { MyDataGrid } from "@/components/my-datagrid/MyDataGrid";
import { FilterDataGrid, PageLayout } from "@/components/layouts";
import {
  useCallEndpoint,
  useFetchSimultaneously,
  useGoToUrl,
  useSettings,
} from "@/hooks";
import { SchedulesFilter } from "./filters/SchedulesFilter";
import { SchedulesListColumn } from "../constants/FixedSchedulesTableComlumns";
import { ActionTable } from "@/styled-components";
import { MyButton, MyTypography } from "@/components/ui";
import classes from "./SchedulesList.module.scss";
import { Box } from "@mui/material";
import { Add, DescriptionOutlined, EditOutlined } from "@mui/icons-material";
import { WorkerSchedules } from "@/models";
import { SelectInput } from "@/components/ui/form/SelectInput";
import { filterNone, replaceOrUpdateItemByIndex } from "@/utils";
import { INACTIVE_USER } from "@/constants";
import { workersSchedulePaginationService } from "../services/fixed-schedules-table.service";
import { TWorkersSchedule } from "@/modules/worker/types/worker-request";

export type TSchedulesFilter = [boolean, boolean, string, string, string];

export const FixedScheduleTable = () => {
  const pageLimit = 30;
  const [filters, setFilters] = useState<TSchedulesFilter>([
    false,
    false,
    "",
    "",
    "",
  ]);
  const { callEndpoint } = useCallEndpoint();
  const { settings, getAndStoreWorkAreasSetting, getAndStoreOfficesSetting } =
    useSettings();
  const { data, error, fetchData, setFetchDataFns } = useFetchSimultaneously<
    [TWorkersSchedule]
  >([]);
  const [rows, setRows] = useState<WorkerSchedules[] | null>(null);
  const { handleGoTo } = useGoToUrl();
  const activeFilters = filters.slice(0, 2).filter((obj) => obj).length;

  useEffect(() => {
    getWorkers();
  }, [filters]);

  useEffect(() => {
    if (data?.[0]) {
      setRows(data[0].list);
    }
  }, [data]);

  const getWorkers = (paginationModel?: GridPaginationModel) => {
    setRows(null);

    const page = paginationModel ? paginationModel.page : 0;
    const pageSize = paginationModel?.pageSize ?? pageLimit;
    setFetchDataFns([
      () =>
        callEndpoint<TWorkersSchedule>(
          workersSchedulePaginationService(
            getFilterValues().status,
            getFilterValues().workArea,
            getFilterValues().office,
            pageSize * page,
            pageSize * page + pageSize,
            getFilterValues().search
          )
        ),
      getAndStoreWorkAreasSetting,
      getAndStoreOfficesSetting,
    ]);
  };

  const handlePaginationModelChange = async (
    paginationModel: GridPaginationModel
  ) => {
    getWorkers(paginationModel);
  };

  const onSearchChange = async (val?: string) => {
    setFilters((prev) => {
      const newData = [...prev] as TSchedulesFilter;
      newData[4] = val!;
      return newData;
    });
  };

  const getFilterValues = () => {
    const status =
      (!filters[0] && !filters[1]) || (filters[0] && filters[1])
        ? undefined
        : !!filters[0];
    const workArea = filters[2];
    const office = filters[3];
    const search = filters[4];

    return {
      status,
      workArea,
      office,
      search,
    };
  };

  const columns = [
    ...SchedulesListColumn,
    {
      field: "action",
      headerName: "",
      cellClassName: "action",
      maxWidth: 120,
      renderCell: (params: GridRenderCellParams<WorkerSchedules>) => {
        return (
          <ActionTable>
            <MyButton
              short
              startIcon={
                params.row.status === INACTIVE_USER ? (
                  <DescriptionOutlined />
                ) : !params.row.fixedSchedule ? (
                  <Add />
                ) : (
                  <EditOutlined />
                )
              }
              color="info"
              variant="outlined"
              handleClick={() =>
                handleGoTo(`worker/schedules`, {
                  param: params.row.id,
                })
              }
            >
              <MyTypography variant="body2" color="info" bold>
                {params.row.status === INACTIVE_USER
                  ? "Ver mas"
                  : !params.row.fixedSchedule
                  ? "Agregar"
                  : "Editar"}
              </MyTypography>
            </MyButton>
          </ActionTable>
        );
      },
    },
  ];

  return (
    <Box className={classes.root}>
      <Box className={classes.filters}>
        <SelectInput
          short
          clear
          label="Área"
          options={filterNone(settings.workAreas)}
          value={filters[2]}
          onChange={(val) =>
            setFilters(replaceOrUpdateItemByIndex(filters, 2, val))
          }
        />
        <SelectInput
          short
          clear
          label="Sucursal"
          options={filterNone(settings.offices)}
          value={filters[3]}
          onChange={(val) =>
            setFilters(replaceOrUpdateItemByIndex(filters, 3, val))
          }
        />
      </Box>
      <MyDataGrid
        rows={rows}
        columns={columns}
        error={error}
        fetchData={fetchData}
        onSearchChange={onSearchChange}
        pagination={{
          server: {
            pageInfo: {
              pageSize: pageLimit,
              totalRowCount: data?.[0]?.total,
            },
            handlePaginationModelChange: handlePaginationModelChange,
          },
        }}
        filter={{
          label: "Trabajadores",
          component: (
            <FilterDataGrid>
              <SchedulesFilter filters={filters} setFilters={setFilters} />
            </FilterDataGrid>
          ),
          activeFilters: activeFilters,
        }}
        disabledExport
        getCellClassName={(params: GridCellParams<any, any, number>) => {
          if (params.row.status === INACTIVE_USER) {
            return "unhighlighted";
          }
          return "";
        }}
      />
    </Box>
  );
};
