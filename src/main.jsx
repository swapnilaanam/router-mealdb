import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Meals from './components/Meals/Meals'
import Restaurants from './components/Restaurants/Restaurants'
import Categories from './components/Categories/Categories'
import About from './components/About/About'
import MealDetail from './components/MealDetail/MealDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Meals />,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
      },
      {
        path: 'restaurants',
        element: <Restaurants />
      },
      {
        path: 'categories',
        element: <Categories />,
        loader: async () => await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'meal/:mealdb',
        element: <MealDetail />,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealdb}`) 
      },
      {
        path: '*',
        element: <div className='text-center mt-72'>
          <h2 className='text-2xl font-medium'>404 ! Page Not Found !</h2>
          <p className='text-2xl mt-6 mb-12'>Please Try Again With A Proper Url !</p>
          <Link to="/" className='bg-orange-400 rounded-md py-4 px-6'>Go Back To Home</Link>
        </div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
