import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EvaluateScreen from './screens/EvaluateScreen';
import RankingScreen from './screens/RankingScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailsScreen from './screens/DetailsScreen';
import CreatePlaceScreen from './screens/CreatePlaceScreen';
import AddressScreen from './screens/AddressScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import LoginScreen from './screens/LoginScreen';

const screens = {
  home: HomeScreen,
  map: MapScreen,
  evaluate: EvaluateScreen,
  ranking: RankingScreen,
  profile: ProfileScreen,
  details: DetailsScreen,
  create: CreatePlaceScreen,
  address: AddressScreen,
  confirm: ConfirmScreen,
  login: LoginScreen,
};

export default function App() {
  const [screen, setScreen] = useState('home');
  const [history, setHistory] = useState([]);

  const navigate = (nextScreen) => {
    setHistory((prev) => [...prev, screen]);
    setScreen(nextScreen);
  };

  const goBack = () => {
    setHistory((prev) => {
      const copy = [...prev];
      const previous = copy.pop() || 'home';
      setScreen(previous);
      return copy;
    });
  };

  const CurrentScreen = screens[screen];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2F3A8F' }}>
      <StatusBar barStyle="light-content" backgroundColor="#2F3A8F" />
      <CurrentScreen
        screen={screen}
        navigate={navigate}
        goBack={goBack}
      />
    </SafeAreaView>
  );
}