import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock';
import { Restaurants } from './restaurants/component';
import { Layout } from './layout/component';
import { Restaurant } from './restaurant/component';
import { Reviews } from './reviews/component';
import { Review } from './review/component';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Layout>
    <Restaurants restaurants={restaurants}/>
  </Layout>
);


