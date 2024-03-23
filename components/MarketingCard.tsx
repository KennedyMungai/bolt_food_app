import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { dummyRestaurantsData } from '~/assets/data/restaurantData';

type Props = {
  data: (typeof dummyRestaurantsData)[0];
};

const MarketingCard = ({ data }: Props) => {
  const ratingColor = data.rating > 4.5 ? '#ffd700' : 'black';

  return (
    <Link href={`/storeDetails/${data.id}`} asChild>
      <Pressable className="mt-4 shadow-sm">
        <View>
          <Image
            source={{ uri: data.profileImage }}
            className="w-full rounded-md aspect-video"
            resizeMode="cover"
          />
          <Text className="absolute bottom-2 right-2 bg-white/80 p-2 rounded-sm">
            {data.delivery} min
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-2xl font-semibold text-neutral-600">{data.name}</Text>
          <View className="flex flex-row gap-2 items-center mt-2">
            <Ionicons name="star" size={20} color={ratingColor} />
            <Text className="text-lg font-semibold text-neutral-500">{data.rating}</Text>
          </View>
        </View>
        <Text className="text-neutral-500 font-semibold text-xl">$ {data.price}</Text>
      </Pressable>
    </Link>
  );
};

export default MarketingCard;
