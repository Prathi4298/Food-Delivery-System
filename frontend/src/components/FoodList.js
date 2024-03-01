import React from 'react';

const FoodList = ({ foodItems }) => {
    return (
        <div>
            <h2>Food List</h2>
            <ul>
                {foodItems.map((food) => (
                    <li key={food.id}>
                        <img src={food.image} alt={food.name} />
                        <div>
                            <h3>{food.name}</h3>
                            <p>{food.description}</p>
                            <p>Price: ${food.price}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodList;
