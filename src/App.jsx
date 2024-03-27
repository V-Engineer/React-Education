import { useEffect, useState } from "react";
import { restaurants } from "./constants/mock";
import { Layout } from "./layout/component";
import { Restaurant } from "./restaurant/component";
import { RestaurantTabs } from "./restaurant-tabs/component";

const getSavedCurrentRestaurantIndex = () => {
  return Number(localStorage.getItem("currentRestaurantIndex") || 0);
};

const setCurrentRestaurantIndexStorage = (index) =>{
    localStorage.setItem("currentRestaurantIndex", index.toString())
}

export const App = () => {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(getSavedCurrentRestaurantIndex);
  const currentRestaurant = restaurants[currentRestaurantIndex];
  useEffect(() => {
    setCurrentRestaurantIndexStorage(currentRestaurantIndex)
}, [currentRestaurantIndex]);

  return (
    <Layout>
      <RestaurantTabs 
      restaurants={restaurants}
       onTabClick={setCurrentRestaurantIndex}
       currentIndex={currentRestaurantIndex}
       />
      {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
    </Layout>
  );
};
