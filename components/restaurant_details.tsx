import React from 'react';
import { Image } from 'react-native';

import ParallaxScrollView from '../components/parallax-scroll-view';

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
          <Image
            className="w-full h-full"
            style={{ backgroundColor: 'white' }}
            source={{ uri: details.profileImage }}
          />
        )}
      />
    </>
  );
};

export default RestaurantDetails;
