import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  ListRenderItem,
  ScrollView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import ParallaxScrollView from '../components/parallax-scroll-view';

import { sharedElementTransition } from '~/utils/shared-element-transition';
import { Link } from 'expo-router';

type Props = {
  details: RestaurantDetails;
};

const RestaurantDetails = ({ details }: Props) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const opacity = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value),
  }));

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    data.forEach((category, index) => {
      const sectionTop = index * 260;
      const sectionBottom = (index + 1) * 260;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveCategoryIndex(index);
      }
    });

    setActiveButtonIndex(activeCategoryIndex);

    if (scrollPosition > 80) {
      opacity.value = withTiming(1);
    } else {
      opacity.value = withTiming(0);
    }
  };

  const selectCategory = (index: number) => {
    setActiveButtonIndex(index);
  };

  const ratingColor = details.rating > 4.5 ? '#ffd700' : 'black';

  const data = details.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index,
  }));

  const renderItem: ListRenderItem<Meal> = ({ item, index }) => (
    <Link href={`/(modals)/item/${item.id}`} asChild>
      <TouchableOpacity className="px-4 flex flex-row justify-between items-center my-2">
        <View className="flex flex-1 my-4 mr-8">
          <Text className="text-lg font-semibold text-neutral-600">{item.name}</Text>
          <Text className="text-sm text-[#6e6d72] font-semibold">{item.info}</Text>
          <Text className="text-base text-stone-500 font-semibold">$ {item.price}</Text>
        </View>
        <Image source={{ uri: item.img }} className="w-24 h-24 rounded-full" resizeMode="cover" />
      </TouchableOpacity>
    </Link>
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
        stickyHeaderHeight={100}
        scrollEvent={handleScroll}>
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
          <View className="m-6">
            <SectionList
              sections={data}
              scrollEnabled={false}
              keyExtractor={(item, index) => `${item}-${index}`}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View className="border-[0.5px] bg-neutral-500" />}
              SectionSeparatorComponent={() => <View className="border-[1px] bg-neutral-600" />}
              renderSectionHeader={({ section: { title, index } }) => (
                <Text className="text-2xl font-semibold my-4 ml-4">{title}</Text>
              )}
            />
          </View>
        </View>
      </ParallaxScrollView>

      <Animated.View>
        <View className="justify-center pt-2 bg-white">
          <ScrollView
            horizontal
            // showHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 15,
              alignItems: 'center',
              gap: 10,
            }}>
            {details.food.map((food, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => selectCategory(index)}
                className={activeButtonIndex === index ? 'px-2 py-1' : 'px-2 py-1'}>
                <Text className={activeButtonIndex === index ? 'font-bold text-base' : 'text-base'}>
                  {food.category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Animated.View>
    </>
  );
};

export default RestaurantDetails;
