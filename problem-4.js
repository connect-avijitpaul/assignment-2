function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return 'Invalid';
  }
  let best = restaurants[0];
  for (let data of restaurants) {
    if (data.rating > best.rating) {
      best = data;
    }
  }
  return best.name.toUpperCase();
}

console.log(
  'outpur is:',
  topRatedRestaurant([
    { name: 'Chillox', rating: 4.5 },
    { name: "Sultan's Dine", rating: 4.8 },
  ]),
);

console.log(
  'output is:',
  topRatedRestaurant([
    { name: 'KFC', rating: 4.2 },
    { name: 'Pizza Hut', rating: 4.6 },
  ]),
);

console.log('outpur is:', topRatedRestaurant([]));

console.log('Outputs iS:', topRatedRestaurant('restaurants'));
console.log(
  'output is:',
  topRatedRestaurant([
    { name: 'KACCIE DINE', rating: 4.62 },
    { name: 'Pizza Hut', rating: 4.6 },
  ]),
);
