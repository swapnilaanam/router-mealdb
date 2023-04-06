import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { idMeal, strMeal, strCategory, strMealThumb, strYoutube } = meal;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`meal/${idMeal}`);
    }

    return (
        <div className='rounded-md bg-orange-400'>
            <img src={strMealThumb} alt={strMeal} className='rounded-t-md' />
            <div className='ps-4 py-6'>
                <h3 className='text-3xl font-semibold'>Name: {strMeal}</h3>
                <h5 className='text-2xl py-2 mb-4'>Category: {strCategory}</h5>
                <a href={strYoutube} target="_blank" className='bg-green-500 py-2 px-4 rounded-md text-white font-medium'>
                    Video Tutorial
                </a>
                <br></br>
                <div className='mt-6'>
                    <Link className='bg-sky-500 text-white py-2 px-4 font-medium' to={`meal/${idMeal}`}>
                        Details
                    </Link>
                    <Link to={`meal/${idMeal}`}>
                        <button className='bg-sky-500 text-white py-2 px-4 font-medium rounded-md'>
                            Show Details
                        </button>
                    </Link>
                    <button onClick={handleNavigate} className='bg-sky-500 text-white py-2 px-4 font-medium rounded-md'>
                        Details Handler
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Meal;