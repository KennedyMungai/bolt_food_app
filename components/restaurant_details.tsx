import React from 'react';
import { Image } from 'react-native';

import ParallaxScrollView from '../components/parallax-scroll-view';
import Animated from 'react-native-reanimated';

type Props = {
  details: RestaurantDetails;
};

const RestaurantDetails = ({ details }: Props) => {
  return (
    <>
      <ParallaxScrollView
        styles={{ flex: 1 }}
        backgroundColor="white"
        parallaxHeaderHeight={400}
        renderBackground={() => (
          <Animated.Image
            className="w-full h-full"
            style={{ backgroundColor: 'white' }}
            source={{ uri: details.profileImage }}
            sharedTransitionTag={`image-${details.id}`}
          />
        )}
      />
    </>
  );
};

export default RestaurantDetails;
