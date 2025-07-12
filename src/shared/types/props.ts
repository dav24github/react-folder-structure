import { Access } from "@/models";
import { TypeWithKey } from "./base";
import {
  GridCellParams,
  GridColDef,
  GridPaginationModel,
  GridRowsProp,
  GridTreeNode,
} from "@mui/x-data-grid";
import { Dayjs } from "dayjs";
import { AutocompleteRenderInputParams } from "@mui/material";

// BASE
export type Color =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "inherit";
export type TColor = Color | "white" | undefined;

export type ChildrenProps = {
  children?: React.ReactNode;
};

export type TVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "body3"
  | undefined;
export type MyTypoGraphyProps = {
  text?: string;
  className?: string;
  variant?: TVariant;
  color?: TColor;
  bold?: boolean;
  noWrap?: boolean;
  end?: boolean;
  center?: boolean;
  muiProps?: TypeWithKey<any>;
  icon?: React.ReactNode;
  onClick?: (() => void) | ((evt: React.MouseEvent<HTMLButtonElement>) => void);
  iconColor?: TColor;
} & ChildrenProps;

export type MyButtonProps = {
  color?: Color;
  variant?: "contained" | "outlined" | "text" | undefined;
  type?: "submit" | "button" | undefined;
  sx?: any;
  className?: string;
  disabled?: boolean;
  short?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  component?: any;
  to?: string;
  btnPopOverProps?: any;
  handleClick?: (
    evt: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
} & ChildrenProps;

export type IconButtonProps = {
  onClick?: (() => void) | ((evt: React.MouseEvent<HTMLButtonElement>) => void);
  disabled?: boolean;
  border?: boolean;
  type?: "button" | "submit" | "reset";
  icon?:
    | "add"
    | "remove"
    | "close"
    | "edit"
    | "delete"
    | "file"
    | "detail"
    | JSX.Element;
  color?: TColor;
  variant?: "contained" | "text" | "outlined";
  size?: "large" | "medium" | "2xl" | "xl" | "lg" | "md" | "small";
  sx?: any;
  title?: string;
};

export type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallbackComponent: React.ReactNode;
  loadedData?: boolean;
  isTitledCard?: boolean;
  isPage?: boolean;
  isModule?: boolean;
  error?: boolean;
};
// ------------------------------

// LAYOUTS
export type NavItemProps = {
  index: number;
  item: Access;
  subitem?: boolean;
  openItem: boolean;
  onUpateOpenItem?: (index: number, val: boolean) => void;
};

export type ButtonPopOverProps = {
  label?: string | JSX.Element;
  fullWidth?: boolean;
  icon?: string | JSX.Element;
  maxContent?: boolean;
  title?: string;
  className?: string;
  noClose?: boolean;
  position:
    | "bottom-left"
    | "bottom-right"
    | "bottom-center"
    | "top-center"
    | "top-left"
    | "top-right";
  btnStyle?: any;
  disabled?: boolean;
  buttonProps?: any;
  ButtonProps?: any;
  component?: JSX.Element;
  onClick?: () => void;
} & ChildrenProps;

export type SidebarWrapperProps = {
  mobileOpen?: boolean;
  handleClose?: () => void;
  expanded?: boolean;
} & ChildrenProps;

export type HeaderNavProps = {
  expanded?: boolean;
  handleExtendClose?: () => void;
};

export type PageLayoutProps = {
  breadCrumbs?: { label?: string; onClick?: () => void }[];
  id?: string;
  title?: string | JSX.Element | undefined;
  center?: boolean;
  padding?: boolean;
  actions?: JSX.Element;
  paddingRB?: boolean;
  notitleGap?: boolean;
} & ChildrenProps;

export type MyTabsProps = {
  orientation: "vertical" | "horizontal";
  position?: "left" | "right";
  isInnerComponent?: boolean;
  noBg?: boolean;
  fullWidth?: boolean;
  noPadding?: boolean;
  paddingPanel?: boolean;
  fixed?: boolean;
  labels: string[];
  minHeight?: string;
  onIndexChange?: (index: number) => void;
  tabPanels: JSX.Element[];
  currentIndex?: number;
  indexHasSubTabs?: number[];
};

export type MyTabPanelProps = {
  orientation: "vertical" | "horizontal";
  padding?: boolean;
  value: number;
  index: number;
} & ChildrenProps;
// ------------------------------

// PopUp
export type BackdropProps = {
  type?: "normal" | "loading";
  handleClose?: () => void;
};
export type TPopUpType =
  | "success"
  | "error"
  | "warning"
  | "confirmation"
  | "important"
  | "delete"
  | "accept"
  | "inprogress"
  | "close"
  | "block"
  | "cancel"
  | "hide"
  | null;
export type PopUpData = {
  type: TPopUpType;
  msg: string;
  title: string;
};
export type PopUpProps = PopUpData & {
  visible: boolean;
  hide?: boolean;
};
// ------------------------------

export type SpinnerProps = {
  noBackdrop?: boolean;
  display?: boolean;
  color?: Color;
  size?: "normal" | "small";
};

// Card
export type CardProps = {
  title?: string | JSX.Element;
  icon?: JSX.Element | null;
  chipTitle?: JSX.Element;
  header?: JSX.Element;
  center?: boolean;
  actions?: JSX.Element;
  goBack?: () => void;
  onClose?: () => void;
  noStyle?: boolean;
  my0?: boolean;
  color?: TColor;
  widthFull?: boolean;
  mt?: boolean;
  p?: string;
  px?: string;
  variant?: TVariant;
  width?: string;
  divider?: boolean;
  maxContentItems?: boolean;
  shiftedContent?: boolean;
  shiftedContentTemp?: boolean;
  even?: boolean;
  gap?: string;
  row?: boolean;
  height?: string;
  minHeight?: string;
  minWidth?: string;
  size?: "small" | "normal" | "large";
  muiProps?: TypeWithKey<any>;
} & ChildrenProps;

//Form
export type TextfieldProps = {
  id?: string;
  label: string;
  type?: string;
  name: string;
  min?: number;
  autocompleteProps?: AutocompleteRenderInputParams;
  max?: number;
  step?: number;
  multiline?: boolean;
  autoFocus?: boolean;
  rows?: number;
  disabled?: boolean;
  icon?: string;
  toggleIcons?: [string, string];
  helperIconText?: JSX.Element;
  helperText?: string;
  className?: string;
  noBorder?: boolean;
};
export type TextfieldToggleAdormentProps = {
  toggle: boolean;
  toggleIcons?: [string, string];
  handleClick: () => void;
};
export type TextfieldAdormentProps = {
  icon: string;
};

export type FormGroupProps = {
  title?: string | JSX.Element;
  actions?: JSX.Element;
  smTitle?: boolean;
  divider?: boolean;
  helper?: JSX.Element;
} & ChildrenProps;

export type BtnContainerProps = {
  colspan?: number;
  center?: boolean;
  itemsStart?: boolean;
  mt0?: boolean;
} & ChildrenProps;

export type TOptions = {
  index?: number;
  id: string | number;
  name: string;
  key?: string;
  label?: string;
  description?: string;
};

export type TSelectProps = {
  name: string;
  label: string;
  linkedName?: string;
  disabled?: boolean;
  helperIconText?: JSX.Element;
  helperText?: string;
  options: TOptions[] | null;
  onChange?: () => void;
  keyLabel?: string;
};

export type TSelectInputProps = {
  label: string;
  linkedName?: string;
  value: string | number;
  icon?: JSX.Element;
  short?: boolean;
  disabled?: boolean;
  helperIconText?: JSX.Element;
  helperText?: string;
  options: TOptions[] | null;
  onChange: (val: string | number) => void;
  clear?: boolean;
};

export type TDatePickerFieldProps = {
  name?: string;
  label?: string;
  value?: Dayjs | null;
  max?: string;
  min?: string;
  weekly?: boolean;
  noClear?: boolean;
  short?: boolean;
  disabled?: boolean;
  notEqual?: string;
  helperInfo?: string;
  requiredWhen?: string;
  requiredWhen1?: string;
  requiredWhen2?: string;
  views?: ("year" | "month" | "day")[];
  onChange?: (value: Dayjs) => void;
};

export type TTimeFieldProps = {
  name: string;
  label: string;
};

export type TCheckboxFiledProps = {
  name: string;
  label: React.ReactNode;
  bold?: boolean;
  description?: string;
  linkedName?: string;
  initLinkedValue?: string | Dayjs;
  className?: string;
  onChange?: (...arg: any) => void;
  disabled?: boolean;
};

export type HelperTextFieldProps = {
  color?: TColor;
} & ChildrenProps;

export type TDataGridColumn = GridColDef & { index?: number };

export type TTableProps = {
  title?: string;
  getCellClassName?: (
    params: GridCellParams<any, any, any, GridTreeNode>
  ) => string;
  keepOriginalData?: boolean;
  selectionModelInit?: string[];
  rows: GridRowsProp | null | undefined;
  pagination?: {
    pageSize?: number;
    server?: {
      pageInfo: {
        pageSize: 10 | 30 | 50 | 70 | 100;
        totalRowCount?: number;
      };
      handlePaginationModelChange: (data: GridPaginationModel) => void;
    };
  };
  columns: TDataGridColumn[];
  disabledExport?: boolean;
  error?: boolean;
  selection?: boolean;
  noPagination?: boolean;
  disabledQuickFilter?: boolean;
  calculationMode?: boolean;
  actions?: JSX.Element;
  height?: string;
  filter?: { label?: string; component: JSX.Element; activeFilters: number };
  filterSection?: JSX.Element;
  fetchData?: () => void;
  onSearchChange?: (value: string | undefined) => void;
  onSelectionActionsClick?: (data: string[]) => void;
  onSelectionChange?: (data: string[]) => void;
};

export type DropdownProps = {
  noIcon?: boolean;
  arrowIcon?: boolean;
  fixed?: boolean;
  actionHover?: boolean;
  actions?: JSX.Element;
  title: string | JSX.Element;
  description?: string;
  icon?: JSX.Element;
  defaultExpanded?: boolean;
} & ChildrenProps;

export type TDraggableList = {
  initItems: TDraggableItem[];
  onReorder: (newItems: TDraggableItem[]) => void;
};

export type TDraggableItem = {
  id: string | number;
  name: string;
  content?: JSX.Element;
};
