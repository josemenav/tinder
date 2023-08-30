"use client"
import React from 'react';
import Home from './home/page';
import NavBar from '../components/NavBar/NavBar.component';
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'; 
import './index.css'

const HomePage = () => {
  return (
    <Provider store= {store}>
    <Fragment>
    <div>
      <Home/>
    </div>
    </Fragment>
    </Provider>
  );
};

export default HomePage;
