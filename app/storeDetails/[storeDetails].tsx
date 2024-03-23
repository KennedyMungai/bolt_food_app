import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import RestaurantDetails from '~/components/restaurant_details';

const StoreDetails = () => {
  const { storeDetails: storeId } = useLocalSearchParams();

  return <RestaurantDetails />;
};

export default StoreDetails;
