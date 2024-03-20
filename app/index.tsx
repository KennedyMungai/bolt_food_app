import { Redirect } from 'expo-router';
import React from 'react';

const MainAppPage = () => {
  return <Redirect href={'/(tabs)'} />;
};

export default MainAppPage;
