import React from 'react';
import { DynamicTableProps } from './DynamicTable.types';
import { renderCellContent } from './renderCellContent';
import IconButton from '../buttons/IconButton/IconButton';
import Loader from '../Loader/Loader';
import { themeColors } from '../../config';

const DynamicTable: React.FC<DynamicTableProps> = ({
    data,
    columns,

    // Styles
    containerStyle,
    tableStyle,
    theadStyle,
    tbodyStyle,
    rowStyle,
    cellStyle,
    headerCellStyle,

    // Row selection
    selectableRows,
    selectedRows,
    onRowSelect,

    // Sorting
    onSortChange,
    sortState,

    // Footer
    showFooterHeader,

    // States
    emptyMessage = "No data available",
    loading = false,
}) => {
    const handleSortChange = (columnName: string) => {
        if (!onSortChange) return;

        if (sortState?.column === columnName) {
            // If it is the same column, we change the direction
            const newDirection = sortState.direction === 'asc' ? 'desc' : 'asc';
            onSortChange(columnName, newDirection);
        } else {
            // If it is a new column, we start with ascending
            onSortChange(columnName, 'asc');
        }
    };

    return (
        <div style={{
            width: '100%',
            overflowX: 'auto',
            ...containerStyle
        }}>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                ...tableStyle
            }}>
                <thead style={theadStyle}>
                    <tr>
                        {selectableRows && (
                            <th style={{
                                padding: 10,
                                textAlign: 'center',
                                ...headerCellStyle
                            }}>
                                <IconButton
                                    icon={selectedRows?.length === data.length && data.length > 0 ? 'checkboxChecked' : 'checkboxUnchecked'}
                                    onClick={() => {
                                        const selectAll = !(selectedRows?.length === data.length);
                                        data.forEach((row) => {
                                            onRowSelect?.(row.id, selectAll);
                                        });
                                    }}
                                    size="sm"
                                    type="clear"
                                    hasShadow={false}
                                />
                            </th>
                        )}
                        {columns.map((column) => (
                            <th
                                key={column.name}
                                style={{
                                    padding: 10,
                                    textAlign: column.config?.align || 'left',
                                    whiteSpace: 'nowrap',
                                    cursor: column.config?.sortable ? 'pointer' : 'default',
                                    ...headerCellStyle
                                }}
                                onClick={() => column.config?.sortable && handleSortChange(column.name)}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                    {column.label}
                                    {sortState?.column === column.name && (
                                        <span style={{ fontSize: 12 }}>
                                            {sortState.direction === 'asc' ? '▲' : '▼'}
                                        </span>
                                    )}
                                </div>
                            </th>

                        ))}
                    </tr>
                </thead>

                <tbody style={tbodyStyle}>
                    {loading ? (
                        <tr>
                            <td colSpan={columns.length + (selectableRows ? 1 : 0)} style={{ padding: 20, textAlign: 'center' }}>
                                <Loader
                                    containerStyle={{
                                        marginTop: 20,
                                        marginBottom: 20
                                    }}
                                />
                            </td>
                        </tr>
                    ) : data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length + (selectableRows ? 1 : 0)} style={{ padding: 20, textAlign: 'center' }}>
                                {emptyMessage}
                            </td>
                        </tr>
                    ) : (
                        data.map((row, rowIndex) => {
                            const isSelected = selectedRows?.includes(row.id);

                            return (
                                <tr
                                    key={row.id || rowIndex}
                                    style={{
                                        backgroundColor: isSelected ? themeColors.medium : undefined,
                                        ...rowStyle
                                    }}
                                >
                                    {selectableRows && (
                                        <td style={{
                                            padding: 10,
                                            textAlign: 'center',
                                            ...cellStyle
                                        }}>
                                            <IconButton
                                                icon={isSelected ? 'checkboxChecked' : 'checkboxUnchecked'}
                                                onClick={() => onRowSelect?.(row.id, !isSelected)}
                                                size="sm"
                                                type="clear"
                                                hasShadow={false}
                                            />
                                        </td>
                                    )}
                                    {columns.map((column) => (
                                        <td
                                            key={column.name}
                                            style={{
                                                padding: 10,
                                                textAlign: column.config?.align || 'left',
                                                whiteSpace: 'nowrap',
                                                ...cellStyle
                                            }}
                                        >
                                            {renderCellContent(row, column)}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })
                    )}
                </tbody>
                {showFooterHeader && (
                    <tfoot>
                        <tr>
                            {selectableRows && (
                                <th style={{
                                    padding: 10,
                                    textAlign: 'center',
                                    ...headerCellStyle
                                }}>
                                    {/* Footer does not need a checkbox */}
                                </th>
                            )}
                            {columns.map((column) => (
                                <th
                                    key={column.name}
                                    style={{
                                        padding: 10,
                                        textAlign: column.config?.align || 'left',
                                        whiteSpace: 'nowrap',
                                        ...headerCellStyle
                                    }}
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </tfoot>
                )}

            </table>
        </div>
    );
};

export default DynamicTable;
