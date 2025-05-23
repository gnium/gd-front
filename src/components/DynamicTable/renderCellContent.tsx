import { ColumnDefinition } from './DynamicTable.types';

export const renderCellContent = (row: any, column: ColumnDefinition) => {
    const value = row[column.name];

    switch (column.type) {
        case 'text':
            return value ?? '-';
        case 'thumbnail':
            return (
                <img
                    src={value}
                    alt={column.label}
                    style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4 }}
                />
            );
        case 'badge':
            return (
                <span style={{
                    display: 'inline-block',
                    padding: '2px 8px',
                    borderRadius: 12,
                    backgroundColor: '#eee',
                    fontSize: 12
                }}>
                    {value}
                </span>
            );
        case 'custom':
            if (column.config?.render) {
                return column.config.render(row);
            }
            return null;
        default:
            return value ?? '-';
    }
};
