import React from 'react';
import { ScrollView, Text } from 'react-native';
import Screen from '../components/Screen';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

const COLORS = {
  text: '#1C1C1E',
  gray: '#8E8E93',
};

export default function CreatePlaceScreen({ navigate, goBack, screen }) {
  return (
    <Screen
      title="Cadastrar Novo Local"
      subtitle="Dados básicos do espaço urbano"
      screen={screen}
      navigate={navigate}
      goBack={goBack}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppInput placeholder="Nome do local" />
        <AppInput placeholder="Tipo de local" />
        <AppInput placeholder="Rua, número e bairro" />

        <AppButton title="Próximo" onPress={() => navigate('address')} />
      </ScrollView>
    </Screen>
  );
}