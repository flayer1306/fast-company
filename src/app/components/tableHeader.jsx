import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const iconStyle = selectedSort.order === 'asc' ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill';
    const renderIconSort = (selectedSort, currentPath) => {
        if (selectedSort.path === currentPath) {
            return <i className={iconStyle}></i>;
        }
    };
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({ ...selectedSort, order: selectedSort.order === 'asc' ? 'desc' : 'asc' });
        } else {
            onSort({ path: item, order: 'asc' });
        }
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th key={column}
                        onClick = {columns[column].path
                            ? () => handleSort(columns[column].path, column)
                            : undefined }
                        {...{ role: columns[column].path && 'button' }}
                        scope="col"
                    >
                        {columns[column].name}
                        {renderIconSort(selectedSort, columns[column].path)}
                    </th>
                ))}
            </tr>
        </thead>

    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableHeader;
