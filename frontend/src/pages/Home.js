import React, { useState, useEffect } from 'react';
import FoodList from '../components/FoodList';
import { getFoodItems } from '../services/api';

const Home = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        // Fetch food items from backend API
        const fetchFoodItems = async () => {
            try {
                const response = await getFoodItems();
                setFoodItems(response.data);
            } catch (error) {
                console.error('Error fetching food items:', error);
            }
        };

        fetchFoodItems();
    }, []);

    return (
        <div>
            <h1>Welcome to our food ordering app</h1>
            <FoodList foodItems={foodItems} />
        </div>
    );
};

export default Home;
