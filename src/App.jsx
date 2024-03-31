import {  useState } from "react";
import { restaurants } from "./constants/mock";
import { Layout } from "./layout/component";
import { Restaurant } from "./restaurant/component";
import { RestaurantTabs } from "./restaurant-tabs/component";
import { getCurrentRestaurantIndexStorage, setCurrentRestaurantIndexStorage } from "./utils/storage";

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = 'currentRestaurantIndex';

export const App = () => {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() => getCurrentRestaurantIndexStorage( ACTIVE_RESTAURANT_INDEX_STORAGE_KEY));
  const currentRestaurant = restaurants[currentRestaurantIndex];

  return (
    <Layout>
      <RestaurantTabs 
      restaurants={restaurants}
       onTabClick={(index) => {
        setCurrentRestaurantIndex(index),
        setCurrentRestaurantIndexStorage(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, index)
       }}
       currentIndex={currentRestaurantIndex}
       />
      {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
    </Layout>
  );
};
