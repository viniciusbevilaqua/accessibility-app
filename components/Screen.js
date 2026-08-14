import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const COLORS = {
  primary: '#2F3A8F',
  secondary: '#F5F6FA',
  white: '#FFFFFF',
  text: '#1C1C1E',
  gray: '#8E8E93',
  border: '#E5E7EB',
};

function TabButton({ label, iconName, active, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabBtn} activeOpacity={0.7}>
      <MaterialCommunityIcons name={iconName} size={26} color={active ? COLORS.primary : COLORS.gray} />
      <Text style={[styles.tabText, { color: active ? COLORS.primary : COLORS.gray }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function Screen({ children, title, subtitle, screen, navigate, goBack, noPadding }) {
  return (
    <View style={styles.container}>
      
      {/* HEADER DINÂMICO COLADO NO TOPO */}
      <View style={[
        styles.header, 
        screen === 'home' && { paddingBottom: 24 },
        screen === 'profile' && { paddingBottom: 30 }
      ]}>
        
        {/* Se for a HOME */}
        {screen === 'home' && (
          <View style={{ flex: 1, paddingTop: 10 }}>
            <Text style={{ fontSize: 32, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 }}>Acessa</Text>
            <Text style={{ color: '#E5E7EB', fontSize: 15 }}>Descubra locais acessíveis perto de você</Text>
          </View>
        )}

        {/* Se for o PERFIL */}
        {screen === 'profile' && (
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingTop: 10 }}>
            <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#EEF2FF', justifyContent: 'center', alignItems: 'center', marginRight: 16 }}>
              <MaterialCommunityIcons name="account-outline" size={36} color="#2F3A8F" />
            </View>
            <View>
              <Text style={{ fontSize: 24, fontWeight: '800', color: '#FFFFFF' }}>Visitante</Text>
              <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>Não logado</Text>
            </View>
          </View>
        )}

        {/* Se for OUTRA TELA (Padrão com Seta de Voltar) */}
        {screen !== 'home' && screen !== 'profile' && (
          <>
            {goBack ? (
              <TouchableOpacity onPress={goBack} style={styles.backBtn} activeOpacity={0.8}>
                <MaterialCommunityIcons name="arrow-left" size={28} color={COLORS.white} />
              </TouchableOpacity>
            ) : <View style={styles.backBtn} />}
            
            <View style={styles.headerTextWrap}>
              <Text style={styles.title}>{title}</Text>
              {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            <View style={styles.backBtn} />
          </>
        )}
      </View>

      {/* CONTEÚDO DA TELA (Aumentei o paddingBottom para 110 para o conteúdo não ficar escondido) */}
      <View style={{ flex: 1, padding: noPadding ? 0 : 16, paddingBottom: 110 }}>
        {children}
      </View>

      {/* BARRA INFERIOR */}
      <View style={styles.bottomBar}>
        <TabButton label="Início" iconName="home-outline" active={screen === 'home'} onPress={() => navigate('home')} />
        <TabButton label="Mapa" iconName="map-outline" active={screen === 'map'} onPress={() => navigate('map')} />
        <TabButton label="Avaliar" iconName="plus-circle-outline" active={screen === 'evaluate'} onPress={() => navigate('evaluate')} />
        <TabButton label="Ranking" iconName="trophy-outline" active={screen === 'ranking'} onPress={() => navigate('ranking')} />
        <TabButton label="Perfil" iconName="account-circle-outline" active={screen === 'profile'} onPress={() => navigate('profile')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.secondary },
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    zIndex: 10,
  },
  backBtn: { width: 40, height: 40, justifyContent: 'center' },
  headerTextWrap: { flex: 1 },
  title: { color: COLORS.white, fontSize: 18, fontWeight: '800' },
  subtitle: { color: 'rgba(255,255,255,0.85)', marginTop: 2, fontSize: 13 },
  bottomBar: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    paddingTop: 12,
    // Aqui está o truque: um espaçamento dinâmico que levanta os botões no Android e iOS
    paddingBottom: Platform.OS === 'android' ? 36 : 30, 
    elevation: 10,
  },
  tabBtn: { flex: 1, alignItems: 'center' },
  tabText: { marginTop: 4, fontSize: 11, fontWeight: '700' },
});