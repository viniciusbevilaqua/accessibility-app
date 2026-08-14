import React from 'react';
import { ScrollView } from 'react-native';
import Screen from '../components/Screen';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

export default function LoginScreen({ navigate, goBack, screen }) {
  return (
    <Screen
      title="Entrar"
      subtitle="Entre ou crie sua conta"
      screen={screen}
      navigate={navigate}
      goBack={goBack}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppInput placeholder="E-mail" />
        <AppInput placeholder="Senha" />

        <AppButton title="Entrar" onPress={() => navigate('profile')} />
        <AppButton title="Voltar" variant="secondary" onPress={() => navigate('profile')} />
      </ScrollView>
    </Screen>
  );
}