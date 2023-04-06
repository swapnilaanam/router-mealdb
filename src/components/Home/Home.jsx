import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import './Home.css'

const Home = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Header />
            {
                navigation.state === 'loading' ? <Loading /> : <Outlet />
            }
        </div>
    );
};

export default Home;