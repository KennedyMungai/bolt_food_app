import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import ParallaxScrollView from '../components/parallax-scroll-view';

import { sharedElementTransition } from '~/utils/shared-element-transition';

type Props = {
  details: RestaurantDetails;
};

const RestaurantDetails = ({ details }: Props) => {
  const ratingColor = details.rating > 4.5 ? '#ffd700' : 'black';

  return (
    <>
      <ParallaxScrollView
        styles={{ flex: 1 }}
        backgroundColor="white"
        showsVerticalScrollIndicator={false}
        parallaxHeaderHeight={400}
        renderBackground={() => (
          <Animated.Image
            className="w-full h-full"
            style={{ backgroundColor: 'white' }}
            source={{ uri: details.profileImage }}
            resizeMode="cover"
            sharedTransitionTag={`image-${details.id}`}
            sharedTransitionStyle={sharedElementTransition}
          />
        )}
        stickyHeaderHeight={100}>
        <View className="p-4">
          <View className="flex flex-row justify-between">
            <Text className="text-3xl font-bold text-neutral-500">{details.name}</Text>
            <View className="flex flex-row items-center gap-4">
              <Ionicons name="star" size={24} color={ratingColor} />
              <Text className="text-xl font-semibold">{details.rating}</Text>
            </View>
          </View>
          <View className="flex flex-row items-center gap-2 my-2">
            <Ionicons name="bicycle-outline" size={24} />
            <Text className="text-neutral-500 font-semibold text-xl">Delivery</Text>
            <Text className="text-neutral-500 font-semibold text-xl"> . </Text>
            <Ionicons name="walk-outline" size={24} />
            <Text className="text-neutral-500 font-semibold text-xl">Walking</Text>
            <Text className="text-neutral-500 font-semibold text-xl"> . </Text>
            <Text className="text-neutral-500 font-semibold text-xl">More Info</Text>
            <Ionicons name="chevron-forward-outline" size={24} className="text-neutral-500" />
          </View>
          <Text className="font-semibold text-neutral-800 leading-6">{details.about}</Text>
        </View>
      </ParallaxScrollView>
    </>
  );
};

export default RestaurantDetails;
