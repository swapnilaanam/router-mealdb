import React from 'react';

const Category = ({category}) => {

    const {strCategory, strCategoryThumb} = category;

    return (
        <div className='relative flex flex-col justify-center items-center'>
            <img src={strCategoryThumb} alt={strCategory} />
            <h3 className='text-2xl font-medium bg-amber-200 px-6 py-2 rounded-md mt-4'>{strCategory}</h3>
        </div>
    );
};

export default Category;