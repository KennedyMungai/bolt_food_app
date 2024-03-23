import React from 'react';
import Animated from 'react-native-reanimated';

import ParallaxScrollView from '../components/parallax-scroll-view';

import { sharedElementTransition } from '~/utils/shared-element-transition';

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
            sharedTransitionStyle={sharedElementTransition}
          />
        )}
      />
    </>
  );
};

export default RestaurantDetails;
