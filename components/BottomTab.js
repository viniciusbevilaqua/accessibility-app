import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export default function BottomTab({ navigate, active }) {
  return (
    <View style={styles.container}>
      
      <Tab icon="home-outline" label="Início" active={active === 'home'} onPress={() => navigate('home')} />
      <Tab icon="map-outline" label="Mapa" active={active === 'mapa'} onPress={() => navigate('mapa')} />
      <Tab icon="add-circle-outline" label="Avaliar" active={active === 'avaliar'} onPress={() => navigate('avaliar')} />
      <Tab icon="trophy-outline" label="Ranking" active={active === 'ranking'} onPress={() => navigate('ranking')} />
      <Tab icon="person-outline" label="Perfil" active={active === 'perfil'} onPress={() => navigate('perfil')} />

    </View>
  );
}

function Tab({ icon, label, active, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tab}>
      <Ionicons
        name={icon}
        size={22}
        color={active ? COLORS.primary : COLORS.gray}
      />
      <Text style={{ color: active ? COLORS.primary : COLORS.gray, fontSize: 12 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  tab: {
    alignItems: 'center'
  }
});