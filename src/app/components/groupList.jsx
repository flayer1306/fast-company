import React from 'react';
import PropTypes from 'prop-types';

export const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
    if (!Array.isArray(items)) {
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li className=
                        {'list-group-item' +
                                    (selectedItem === items[item] ? ' active' : '')
                        }
                    key={items[item][valueProperty]}
                    onClick={() => onItemSelect(items[item])}
                    role='button'
                    >
                        {items[item][contentProperty]}
                    </li>
                )
                )
                }
            </ul>
        );
    } else {
        return (
            <ul className="list-group">
                {items.map((item) => (
                    <li className=
                        {'list-group-item' +
                                    (selectedItem === item ? ' active' : '')
                        }
                    key={item[valueProperty]}
                    onClick={() => onItemSelect(item)}
                    role='button'
                    >
                        {item[contentProperty]}
                    </li>
                )
                )
                }
            </ul>
        );
    }
};

GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name'
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    valueProperty: PropTypes.string,
    contentProperty: PropTypes.string,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};
