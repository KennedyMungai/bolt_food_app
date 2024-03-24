import '../global.css';

import { Ionicons } from '@expo/vector-icons';
import { Link, Stack, useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export const unstable_settings = {
  initialRouteName: '(tabs)/home',
};

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="storeDetails/[storeDetails]"
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back"
                size={30}
                style={{
                  marginRight: 20,
                  color: 'black',
                  backgroundColor: '#FFFFFF95',
                  borderRadius: 20,
                  padding: 5,
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Link href="/(tabs)/search" asChild>
              <TouchableOpacity>
                <Ionicons
                  name="search-outline"
                  size={30}
                  style={{
                    marginRight: 20,
                    color: 'black',
                    backgroundColor: '#FFFFFF95',
                    borderRadius: 20,
                    padding: 10,
                  }}
                />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="(modals)/item/[itemDetails]"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          animationDuration: 300,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="close-outline"
                size={30}
                style={{
                  marginRight: 20,
                  color: 'black',
                  backgroundColor: '#FFFFFF95',
                  borderRadius: 20,
                  padding: 5,
                }}
              />
            </TouchableOpacity>
          ),
          headerTransparent: true,
          headerTitle: '',
        }}
      />
    </Stack>
  );
}
