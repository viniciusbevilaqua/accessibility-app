import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Filters from '../components/Filters';
import { locais } from '../data/mockLocais';
import Screen from '../components/Screen';

const COLORS = {
  primary: '#2F3A8F',
  success: '#34C759',
  warning: '#F9A826',
  error: '#FF3B30',
  white: '#FFFFFF',
  text: '#1C1C1E',
  gray: '#8E8E93',
};

export default function MapScreen({ navigate, goBack, screen }) {
  const mapRef = useRef(null);

  // Animações
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  // Estados dos Filtros
  const [filtroTipo, setFiltroTipo] = useState('');
  const [filtroNota, setFiltroNota] = useState(0);
  const [filtroRampa, setFiltroRampa] = useState(false);

  const [localSelecionado, setLocalSelecionado] = useState(null);
  const [mostrarContador, setMostrarContador] = useState(true);

  // Lógica de Filtro do Graco
  const locaisFiltrados = locais.filter((local) => {
    return (
      (filtroTipo === '' || local.bairro === filtroTipo) &&
      local.avaliacao >= filtroNota &&
      (!filtroRampa || local.acessibilidade.rampa === true)
    );
  });

  const corMarker = (nota) => {
    if (nota >= 4) return COLORS.success;
    if (nota >= 3) return COLORS.warning;
    return COLORS.error;
  };

  useEffect(() => {
    setLocalSelecionado(null);
  }, [filtroTipo, filtroNota, filtroRampa]);

  // Animação do Contador do Graco
  useEffect(() => {
    setMostrarContador(true);
    fadeAnim.setValue(0);
    slideAnim.setValue(20);

    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 280, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 280, useNativeDriver: true })
    ]).start();

    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
        Animated.timing(slideAnim, { toValue: 18, duration: 400, useNativeDriver: true })
      ]).start(() => setMostrarContador(false));
    }, 2600);

    return () => clearTimeout(timer);
  }, [filtroTipo, filtroNota, filtroRampa]);

  // Zoom inteligente do Graco
  useEffect(() => {
    if (!mapRef.current || locaisFiltrados.length === 0) return;

    setTimeout(() => {
      if (locaisFiltrados.length === 1) {
        mapRef.current.animateToRegion({
          latitude: locaisFiltrados[0].latitude,
          longitude: locaisFiltrados[0].longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015
        }, 700);
        return;
      }

      const coords = locaisFiltrados.map((l) => ({ latitude: l.latitude, longitude: l.longitude }));
      mapRef.current.fitToCoordinates(coords, {
        edgePadding: { top: 150, right: 50, bottom: 150, left: 50 },
        animated: true
      });
    }, 400);
  }, [filtroTipo, filtroNota, filtroRampa]);

  return (
    <Screen screen={screen} navigate={navigate} goBack={goBack} title="Mapa de Acessibilidade" showBack={false}>
      
      {/* Margem negativa para o mapa ignorar o padding do Screen.js e ficar tela cheia */}
      <View style={{ flex: 1, margin: -16, backgroundColor: '#E5E7EB' }}>
        
        <Filters
          filtroTipo={filtroTipo} setFiltroTipo={setFiltroTipo}
          filtroNota={filtroNota} setFiltroNota={setFiltroNota}
          filtroRampa={filtroRampa} setFiltroRampa={setFiltroRampa}
        />

        {mostrarContador && (
          <Animated.View style={[styles.contadorBox, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
            <Text style={styles.contadorTexto}>
              {locaisFiltrados.length} local {locaisFiltrados.length !== 1 ? 'encontrados' : 'encontrado'}
            </Text>
          </Animated.View>
        )}

        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: -3.7319,
            longitude: -38.5267,
            latitudeDelta: 0.08,
            longitudeDelta: 0.08
          }}
        >
          {locaisFiltrados.map((local) => (
            <Marker
              key={local.id}
              coordinate={{ latitude: local.latitude, longitude: local.longitude }}
              pinColor={corMarker(local.avaliacao)}
              onPress={() => setLocalSelecionado(local)}
              tracksViewChanges={false}
            />
          ))}
        </MapView>

        {localSelecionado && (
          <View style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View>
                <Text style={styles.nome}>{localSelecionado.nome}</Text>
                <Text style={styles.info}>{localSelecionado.bairro}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 }}>
                <MaterialCommunityIcons name="star" size={16} color={COLORS.warning} />
                <Text style={{ marginLeft: 4, fontWeight: '700', color: COLORS.text }}>{localSelecionado.avaliacao}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 12, marginBottom: 16 }}>
               <View style={[styles.badge, localSelecionado.acessibilidade.rampa ? styles.badgeSim : styles.badgeNao]}>
                 <Text style={[styles.badgeTexto, localSelecionado.acessibilidade.rampa ? styles.badgeTextoSim : styles.badgeTextoNao]}>
                   {localSelecionado.acessibilidade.rampa ? 'Tem Rampa' : 'Sem Rampa'}
                 </Text>
               </View>
            </View>

            <View style={{ flexDirection: 'row', gap: 10 }}>
              <TouchableOpacity style={styles.botaoSecundario} onPress={() => setLocalSelecionado(null)}>
                <Text style={styles.textoBotaoSecundario}>Fechar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoPrimario} onPress={() => navigate('details')}>
                <Text style={styles.textoBotaoPrimario}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  contadorBox: {
    position: 'absolute',
    top: 90,
    alignSelf: 'center',
    zIndex: 9,
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 }
  },
  contadorTexto: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: 'bold'
  },
  card: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -4 }
  },
  nome: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 4
  },
  info: {
    fontSize: 14,
    color: COLORS.gray,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  badgeSim: {
    backgroundColor: '#E8F5E9',
    borderColor: '#34C759',
  },
  badgeNao: {
    backgroundColor: '#FFEBEE',
    borderColor: '#FF3B30',
  },
  badgeTexto: { fontSize: 12, fontWeight: '700' },
  badgeTextoSim: { color: '#34C759' },
  badgeTextoNao: { color: '#FF3B30' },
  botaoPrimario: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center'
  },
  textoBotaoPrimario: { color: COLORS.white, fontWeight: '700', fontSize: 15 },
  botaoSecundario: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center'
  },
  textoBotaoSecundario: { color: COLORS.text, fontWeight: '700', fontSize: 15 },
});