import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import { dummyRestaurantsData } from '~/assets/data/restaurantData';
import RestaurantDetails from '~/components/restaurant_details';

const StoreDetails = () => {
  const { storeDetails: storeId } = useLocalSearchParams();

  const singleRestaurantDetails = dummyRestaurantsData.filter((item) => item.id === storeId)[0];

  return <RestaurantDetails details={singleRestaurantDetails} />;
};

export default StoreDetails;
