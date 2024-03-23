import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ListRenderItem, SectionList, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

import ParallaxScrollView from '../components/parallax-scroll-view';

import { sharedElementTransition } from '~/utils/shared-element-transition';

type Props = {
  details: RestaurantDetails;
};

const RestaurantDetails = ({ details }: Props) => {
  const ratingColor = details.rating > 4.5 ? '#ffd700' : 'black';

  const data = details.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index,
  }));

  const renderItem: ListRenderItem<Meal> = ({ item, index }) => (
    <TouchableOpacity className="px-4 flex flex-row justify-between items-center my-2">
      <View className="flex flex-1 my-4 mr-8">
        <Text className="text-lg font-semibold text-neutral-600">{item.name}</Text>
        <Text className="text-sm text-[#6e6d72] font-semibold">{item.info}</Text>
        <Text className="text-base text-stone-500 font-semibold">$ {item.price}</Text>
      </View>
      <Image source={{ uri: item.img }} className="w-24 h-24 rounded-full" resizeMode="cover" />
    </TouchableOpacity>
  );

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

        <View>
          <View className="my-6">
            <SectionList
              sections={data}
              scrollEnabled={false}
              keyExtractor={(item, index) => `${item}-${index}`}
              renderItem={renderItem}
              ItemSeparatorComponent={() => (
                <View className="h-[1px] bg-neutral-800 w-[90%] text-center ml-6" />
              )}
            />
          </View>
        </View>
      </ParallaxScrollView>
    </>
  );
};

export default RestaurantDetails;
