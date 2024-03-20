import { Stack } from 'expo-router';
import React from 'react';

const TabProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TabProfileLayout;
