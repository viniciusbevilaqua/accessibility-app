import React from 'react';
import { ScrollView } from 'react-native';
import Screen from '../components/Screen';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

export default function AddressScreen({ navigate, goBack, screen }) {
  return (
    <Screen
      title="Endereço do Local"
      subtitle="Sem uso de GPS automático"
      screen={screen}
      navigate={navigate}
      goBack={goBack}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppInput placeholder="Rua" />
        <AppInput placeholder="Número" />
        <AppInput placeholder="Bairro" />
        <AppInput placeholder="Ponto de referência" />

        <AppButton title="Continuar" onPress={() => navigate('evaluate')} />
      </ScrollView>
    </Screen>
  );
}