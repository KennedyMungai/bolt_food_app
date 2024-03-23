import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

type Props = {
  details: RestaurantDetails;
};

const RestaurantDetails = ({ details }: Props) => {
  return (
    <SafeAreaView className="px-2 pt-28 bg-white flex-1">
      <View>
        <Text>RestaurantDetails</Text>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantDetails;
