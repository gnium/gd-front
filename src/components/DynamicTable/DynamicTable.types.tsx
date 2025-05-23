export interface ColumnDefinition {
    name: string; // Key in data
    label: string; // Visible column name
    type: 'text' | 'thumbnail' | 'badge' | 'custom'; // Type of content
    config?: {
        sortable?: boolean; // Whether the column can be sorted
        align?: 'left' | 'center' | 'right'; // Alignment of the content
        width?: number | string; // Column width
        render?: (rowData: any) => React.ReactNode; // Custom render function (only if type === 'custom')
    };
}

export interface SortState {
    column: string;
    direction: 'asc' | 'desc';
}

export interface DynamicTableProps {
    data: any[]; // Rows of the table
    columns: ColumnDefinition[]; // Columns configuration

    // Styles
    containerStyle?: React.CSSProperties;
    tableStyle?: React.CSSProperties;
    theadStyle?: React.CSSProperties;
    tbodyStyle?: React.CSSProperties;
    rowStyle?: React.CSSProperties;
    cellStyle?: React.CSSProperties;
    headerCellStyle?: React.CSSProperties;

    // Row selection
    selectableRows?: boolean;
    selectedRows?: (string | number)[];
    onRowSelect?: (rowId: string | number, selected: boolean) => void;

    // Sorting
    onSortChange?: (columnName: string, direction: 'asc' | 'desc') => void;
    sortState?: SortState;

    // Footer
    showFooterHeader?: boolean;

    // Empty / Loading states
    emptyMessage?: string;
    loading?: boolean;
}
