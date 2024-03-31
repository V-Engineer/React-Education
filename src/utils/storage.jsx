export const getCurrentRestaurantIndexStorage = (key) => {
  return Number(localStorage.getItem(key) || 0);
};

export const setCurrentRestaurantIndexStorage = (key, value) => {
  localStorage.setItem(key, value.toString());
};