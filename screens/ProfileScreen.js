import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';

export default function ProfileScreen({ navigate, goBack, screen }) {
  return (
    <Screen screen={screen} navigate={navigate} goBack={goBack}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Botões do Visitante */}
        <TouchableOpacity style={{ backgroundColor: '#FFFFFF', padding: 18, borderRadius: 16, marginBottom: 12, flexDirection: 'row', alignItems: 'center', elevation: 2 }}>
          <MaterialCommunityIcons name="cog-outline" size={24} color="#6B7280" style={{ marginRight: 16 }} />
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#1C1C1E' }}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: '#FFFFFF', padding: 18, borderRadius: 16, marginBottom: 24, flexDirection: 'row', alignItems: 'center', elevation: 2 }}>
          <MaterialCommunityIcons name="information-outline" size={24} color="#6B7280" style={{ marginRight: 16 }} />
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#1C1C1E' }}>Sobre o App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: '#FFEBEE', padding: 18, borderRadius: 16, marginBottom: 30, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#FFCDD2' }}>
          <MaterialCommunityIcons name="logout" size={24} color="#FF3B30" style={{ marginRight: 16 }} />
          <Text style={{ fontSize: 16, fontWeight: '700', color: '#FF3B30' }}>Sair</Text>
        </TouchableOpacity>

        {/* Chamada para Login */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#6B7280', fontSize: 15, marginBottom: 6 }}>Quer uma experiência mais completa?</Text>
          <TouchableOpacity onPress={() => navigate('login')}>
            <Text style={{ color: '#2F3A8F', fontSize: 16, fontWeight: '800' }}>Fazer Login</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </Screen>
  );
}