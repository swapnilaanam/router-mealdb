import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Categories = () => {
    const categories = useLoaderData();

    return (
        <div className='w-11/12 mx-auto px-8 bg-stone-300'>
            <h2 className='text-3xl capitalize text-center font-semibold py-8'>We have these categories to offer</h2>
            <div className='grid md:grid-cols-3 justify-center justify-items-center items-center gap-4'>
                {
                    categories.categories.map(category => <Category key={category.idCategory} category={category} />)
                }
            </div>
        </div>
    );
};

export default Categories;