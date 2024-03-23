import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { dummyRestaurantsData } from '~/assets/data/restaurantData';
import MarketingCard from '~/components/MarketingCard';

const TabHomePage = () => {
  return (
    <SafeAreaView className="flex-1 p-4 pt-12 bg-white pb-10">
      <View className="flex-row justify-between">
        <View className="flex-row items-center gap-2 my-3">
          <MaterialCommunityIcons name="map-marker-outline" size={28} />
          <Text className="text-xl font-semibold">Your Address Here</Text>
        </View>
      </View>

      <FlatList
        data={dummyRestaurantsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <Text className="text-2xl font-bold text-center text-neutral-600 mt-3">
            All Restaurants and Stores
          </Text>
        )}
        renderItem={({ item }) => <MarketingCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default TabHomePage;
