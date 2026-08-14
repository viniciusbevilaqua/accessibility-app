import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const COLORS = {
  primary: '#2F3A8F',
  white: '#FFFFFF',
  gray: '#8E8E93',
  border: '#D7DCE5',
  text: '#1C1C1E',
  softBlue: '#EEF2FF',
};

export default function Filters({ filtroTipo, setFiltroTipo, filtroNota, setFiltroNota, filtroRampa, setFiltroRampa }) {
  const [aberto, setAberto] = useState(false);
  const alturaAnim = useRef(new Animated.Value(0)).current;

  const toggle = () => {
    Animated.timing(alturaAnim, {
      toValue: aberto ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setAberto(!aberto);
  };

  const altura = alturaAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 360],
  });

  const Botao = ({ label, valor, estado, setEstado }) => {
    const ativo = estado === valor;
    return (
      <TouchableOpacity
        onPress={() => setEstado(valor)}
        style={[styles.chip, ativo && styles.chipAtivo]}
        activeOpacity={0.8}
      >
        <Text style={[styles.chipTexto, ativo && styles.chipTextoAtivo]}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      {/* Barra de Busca Fake + Botão de Filtro (Igual ao Figma) */}
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <View style={styles.searchBar}>
          <Text style={{ color: COLORS.gray, fontSize: 15 }}>Buscar local...</Text>
          <MaterialCommunityIcons name="magnify" size={22} color={COLORS.gray} />
        </View>
        <TouchableOpacity style={styles.filterButton} onPress={toggle} activeOpacity={0.8}>
          <MaterialCommunityIcons name={aberto ? "close" : "filter-variant"} size={24} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      {/* Painel de Filtros que desce */}
      <Animated.View style={[styles.container, { height: altura, opacity: alturaAnim }]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollInner}>
          
          <Text style={styles.sectionTitle}>Bairro</Text>
          <View style={styles.grupo}>
            <Botao label="Todos" valor="" estado={filtroTipo} setEstado={setFiltroTipo} />
            <Botao label="Centro" valor="Centro" estado={filtroTipo} setEstado={setFiltroTipo} />
            <Botao label="Benfica" valor="Benfica" estado={filtroTipo} setEstado={setFiltroTipo} />
            <Botao label="Meireles" valor="Meireles" estado={filtroTipo} setEstado={setFiltroTipo} />
          </View>

          <Text style={styles.sectionTitle}>Nota mínima</Text>
          <View style={styles.grupo}>
            <Botao label="Qualquer" valor={0} estado={filtroNota} setEstado={setFiltroNota} />
            <Botao label="3 Estrelas +" valor={3} estado={filtroNota} setEstado={setFiltroNota} />
            <Botao label="4 Estrelas +" valor={4} estado={filtroNota} setEstado={setFiltroNota} />
          </View>

          <Text style={styles.sectionTitle}>Critérios de Acessibilidade</Text>
          <TouchableOpacity
            onPress={() => setFiltroRampa(!filtroRampa)}
            style={[styles.checkItem, filtroRampa && styles.checkItemAtivo]}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons
              name={filtroRampa ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={22}
              color={filtroRampa ? COLORS.primary : COLORS.gray}
            />
            <Text style={styles.checkLabel}>Exigir Rampas de Acesso</Text>
          </TouchableOpacity>

        </ScrollView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    zIndex: 20,
  },
  searchBar: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 54,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  filterButton: {
    width: 54,
    height: 54,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  container: {
    backgroundColor: COLORS.white,
    marginTop: 10,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  scrollInner: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 10,
    marginTop: 4,
  },
  grupo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  chip: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  chipAtivo: {
    backgroundColor: COLORS.softBlue,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  chipTexto: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: '600',
  },
  chipTextoAtivo: {
    color: COLORS.primary,
  },
  checkItem: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkItemAtivo: {
    backgroundColor: COLORS.softBlue,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  checkLabel: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: '600',
    marginLeft: 10,
  },
});