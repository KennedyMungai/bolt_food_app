import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const ItemDetails = () => {
  const { itemDetails: itemId } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <View>
        <Text>ItemDetails</Text>
      </View>
    </SafeAreaView>
  );
};

export default ItemDetails;
