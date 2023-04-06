import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <header>
            <nav className='flex justify-between items-center py-3 px-8 bg-slate-300'>
                <h1 className='text-4xl font-semibold'>MealDB</h1>
                <ul className='flex gap-4 items-center'>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/restaurants">Restaurants</ActiveLink>
                    <ActiveLink to="/categories">Categories</ActiveLink>
                    <ActiveLink to="/about">About</ActiveLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;