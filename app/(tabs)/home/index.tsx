import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import MarketingCard from '~/components/MarketingCard';

const TabHomePage = () => {
  return (
    <SafeAreaView className="flex-1 p-4 pt-12 bg-white">
      <View className="flex-row justify-between">
        <View className="flex-row items-center gap-2">
          <MaterialCommunityIcons name="map-marker-outline" size={28} />
          <Text className="text-lg">Your Address Here</Text>
        </View>
      </View>

      <MarketingCard />
    </SafeAreaView>
  );
};

export default TabHomePage;
