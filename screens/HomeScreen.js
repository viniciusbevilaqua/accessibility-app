import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';

export default function HomeScreen({ navigate, goBack, screen }) {
  const primaryActions = [
    { title: 'Ver Mapa', subtitle: 'Explore locais acessíveis', icon: 'map-outline', route: 'map', tint: '#2F3A8F', bgTint: '#EEF2FF' },
    { title: 'Avaliar Local', subtitle: 'Adicione sua avaliação', icon: 'plus-circle-outline', route: 'evaluate', tint: '#F97316', bgTint: '#FFF7ED' },
    { title: 'Ranking', subtitle: 'Melhores locais', icon: 'trophy-outline', route: 'ranking', tint: '#FBBF24', bgTint: '#FFFBEB' },
  ];

  const recentPlaces = [
    { name: 'Shopping Center Norte', location: 'Vila Guilherme', rating: '4.5', statusColor: '#34C759' },
    { name: 'Mercado Municipal', location: 'Ibirapuera', rating: '3.1', statusColor: '#F9A826' },
  ];

  return (
    <Screen screen={screen} navigate={navigate} goBack={goBack}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {primaryActions.map((action) => (
          <TouchableOpacity key={action.title} onPress={() => navigate(action.route)} activeOpacity={0.8} style={{ backgroundColor: '#FFFFFF', padding: 18, borderRadius: 16, marginBottom: 14, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: action.bgTint, justifyContent: 'center', alignItems: 'center', marginRight: 16 }}>
              <MaterialCommunityIcons name={action.icon} size={26} color={action.tint} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 17, fontWeight: '700', color: '#1C1C1E', marginBottom: 2 }}>{action.title}</Text>
              <Text style={{ color: '#8E8E93', fontSize: 14 }}>{action.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <Text style={{ fontSize: 18, fontWeight: '800', marginTop: 14, marginBottom: 14, color: '#1C1C1E' }}>
          Avaliados Recentemente
        </Text>

        {recentPlaces.map((place) => (
          <TouchableOpacity key={place.name} onPress={() => navigate('details')} activeOpacity={0.8} style={{ borderRadius: 16, backgroundColor: '#FFFFFF', padding: 18, marginBottom: 12, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: place.statusColor, marginRight: 8 }} />
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#1C1C1E' }}>{place.name}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="map-marker-outline" size={16} color="#8E8E93" />
                <Text style={{ marginLeft: 4, color: '#8E8E93', fontSize: 14 }}>{place.location}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons name="star" size={20} color="#F9A826" />
              <Text style={{ marginLeft: 4, fontSize: 16, fontWeight: '800', color: '#1C1C1E' }}>{place.rating}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Screen>
  );
}