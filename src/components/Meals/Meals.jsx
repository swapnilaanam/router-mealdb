import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    let meals = useLoaderData();

    return (
        <div className='meals'>
            <h2 className='text-4xl font-medium text-center mt-5'>
                All The Meals You Need
            </h2>
            <div className='text-center my-4'>
                <input type="text" className='text-blue-400 border rounded-md py-2 px-3'/>
                <button className='bg-orange-500 px-4 py-2 ml-3 rounded-sm text-white'>Search</button>
            </div>
            <div className='grid md:grid-cols-3 md:gap-8 justify-center justify-items-center items-center mt-10'>
                {meals.meals.map(meal => <Meal key={meal.idMeal} meal={meal}/>)}
            </div>
        </div>
    );
};

export default Meals;