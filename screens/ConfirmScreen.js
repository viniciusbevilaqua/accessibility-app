import React from 'react';
import { Text } from 'react-native';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

const COLORS = {
  text: '#1C1C1E',
  gray: '#8E8E93',
};

export default function ConfirmScreen({ navigate, goBack, screen }) {
  return (
    <Screen
      title="Confirmar Avaliação"
      subtitle="Sua avaliação foi enviada"
      screen={screen}
      navigate={navigate}
      goBack={goBack}
    >
      <Text style={{ fontSize: 28, fontWeight: '800', color: COLORS.text, marginTop: 100 }}>
        Avaliação enviada
      </Text>
      <Text style={{ color: COLORS.gray, marginTop: 6, marginBottom: 18 }}>
        Obrigado por contribuir com a comunidade
      </Text>

      <AppButton title="Voltar para início" onPress={() => navigate('home')} />
    </Screen>
  );
}