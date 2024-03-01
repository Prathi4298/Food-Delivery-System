import React from 'react';

const Filter = ({ handleFilter }) => {
    return (
        <div>
            <label>
                <input type="checkbox" onChange={() => handleFilter('veg')} />
                Veg
            </label>
            <label>
                <input type="checkbox" onChange={() => handleFilter('nonVeg')} />
                Non-Veg
            </label>
            <label>
                <input type="checkbox" onChange={() => handleFilter('dessert')} />
                Dessert
            </label>
        </div>
    );
};

export default Filter;
