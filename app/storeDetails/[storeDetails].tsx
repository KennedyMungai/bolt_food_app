import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const StoreDetails = () => {
  const { storeDetails: storeId } = useLocalSearchParams();

  return (
    <View>
      <Text>{storeId}</Text>
    </View>
  );
};

export default StoreDetails;
