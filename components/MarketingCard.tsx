import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { dummyRestaurantsData } from '~/assets/data/restaurantData';

const MarketingCard = () => {
  const ratingColor = dummyRestaurantsData[0].rating > 4.5 ? '#ffd700' : 'black';

  return (
    <Pressable className="mt-4 shadow-sm">
      <View>
        <Image
          source={{ uri: dummyRestaurantsData[0].profileImage }}
          className="w-full rounded-md aspect-video"
          resizeMode="cover"
        />
        <Text className="absolute bottom-2 right-2 bg-white/80 p-2 rounded-sm">
          {dummyRestaurantsData[0].delivery} min
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-2xl font-semibold text-neutral-600">
          {dummyRestaurantsData[0].name}
        </Text>
        <View className="flex flex-row gap-2 items-center mt-2">
          <Ionicons name="star" size={20} color={ratingColor} />
          <Text className="text-lg font-semibold text-neutral-500">
            {dummyRestaurantsData[0].rating}
          </Text>
        </View>
      </View>
      <Text className="text-neutral-500 font-semibold text-xl">
        $ {dummyRestaurantsData[0].price}
      </Text>
    </Pressable>
  );
};

export default MarketingCard;
