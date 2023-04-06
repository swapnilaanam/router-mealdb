import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetail = () => {
    const meal = useLoaderData();
    const {strMeal, strMealThumb, strInstructions} = meal.meals[0];
    return (
        <div className='w-3/5 h-48 mx-auto text-center mt-4 object-scale-down'>
            <img src={strMealThumb} alt={strMeal} className="w-full h-96"/>
            <h3 className='text-4xl font-semibold my-8'>{strMeal}</h3>
            <p>{strInstructions}</p>
        </div>
    );
};

export default MealDetail;