import '../global.css';

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="storeDetails/[storeDetails]"
        options={{
          headerTransparent: true,
          animation: 'slide_from_right',
          animationDuration: 300,
        }}
      />
    </Stack>
  );
}
