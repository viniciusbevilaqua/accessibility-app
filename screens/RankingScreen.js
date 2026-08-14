import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';

const rankingData = [
  { pos: 1, nome: 'Shopping Center Norte', tipo: 'Shopping Center', local: 'Vila Guilherme', nota: 4.8, aval: 52 },
  { pos: 2, nome: 'Parque Ibirapuera', tipo: 'Parque', local: 'Ibirapuera', nota: 4.7, aval: 48 },
  { pos: 3, nome: 'Hospital São Paulo', tipo: 'Hospital', local: 'Vila Clementino', nota: 4.6, aval: 41 },
  { pos: 4, nome: 'MASP', tipo: 'Museu', local: 'Avenida Paulista', nota: 4.5, aval: 39 },
  { pos: 5, nome: 'Teatro Municipal', tipo: 'Teatro', local: 'Centro', nota: 4.4, aval: 37 },
];

export default function RankingScreen({ navigate, goBack, screen }) {
  const getMedalColor = (pos) => {
    if (pos === 1) return '#F59E0B'; // Ouro
    if (pos === 2) return '#9CA3AF'; // Prata
    if (pos === 3) return '#D97706'; // Bronze
    return '#E5E7EB'; // Cinza
  };

  return (
    <Screen title="Ranking" subtitle="Top 5 locais mais acessíveis" screen={screen} navigate={navigate} goBack={goBack}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        {rankingData.map((item) => (
          <TouchableOpacity key={item.nome} onPress={() => navigate('details')} activeOpacity={0.8} style={{ backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 14, flexDirection: 'row', alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOpacity: 0.05 }}>
            
            {/* Ícone de Posição */}
            <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: item.pos <= 3 ? `${getMedalColor(item.pos)}20` : '#F3F4F6', justifyContent: 'center', alignItems: 'center', marginRight: 16 }}>
              {item.pos <= 3 ? (
                <MaterialCommunityIcons name="medal-outline" size={24} color={getMedalColor(item.pos)} />
              ) : (
                <Text style={{ fontSize: 16, fontWeight: '800', color: '#6B7280' }}>{item.pos}</Text>
              )}
            </View>

            {/* Infos do Local */}
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: '800', color: '#1C1C1E', marginBottom: 2 }}>{item.nome}</Text>
              <Text style={{ fontSize: 13, color: '#8E8E93', marginBottom: 4 }}>{item.tipo}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="map-marker-outline" size={14} color="#8E8E93" />
                <Text style={{ fontSize: 12, color: '#8E8E93', marginLeft: 4 }}>{item.local}</Text>
              </View>
            </View>

            {/* Nota */}
            <View style={{ alignItems: 'flex-end' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFBEB', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10, marginBottom: 4 }}>
                <MaterialCommunityIcons name="star" size={16} color="#F59E0B" />
                <Text style={{ marginLeft: 4, fontWeight: '800', color: '#1C1C1E' }}>{item.nota}</Text>
              </View>
              <Text style={{ fontSize: 11, color: '#8E8E93' }}>{item.aval} aval.</Text>
            </View>

          </TouchableOpacity>
        ))}
      </ScrollView>
    </Screen>
  );
}