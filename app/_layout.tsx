import '../global.css';

import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';
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
        }}
      />
    </Stack>
  );
}
