import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';

const COLORS = {
  primary: '#2F3A8F',
  white: '#FFFFFF',
  gray: '#6B7280',
  text: '#1C1C1E',
  successBg: '#E8F5E9',
  successText: '#34C759',
  border: '#E5E7EB',
};

export default function DetailsScreen({ navigate, goBack, screen }) {
  return (
    <Screen title="Detalhes do Local" screen={screen} navigate={navigate} goBack={goBack}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        
        {/* Info Principal */}
        <View style={styles.card}>
          <Text style={styles.title}>Shopping Center Norte</Text>
          <Text style={styles.subtitle}>Shopping Center</Text>
          
          <View style={styles.row}>
            <MaterialCommunityIcons name="map-marker-outline" size={18} color={COLORS.gray} />
            <Text style={styles.address}>Travessa Casalbuono, 120 - Vila Guilherme</Text>
          </View>

          <View style={styles.noteBox}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons name="star" size={32} color="#F59E0B" />
              <Text style={styles.bigNote}>4.5</Text>
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.noteText}>Boa Acessibilidade</Text>
              <Text style={styles.noteAval}>47 avaliações</Text>
            </View>
          </View>
        </View>

        {/* Recursos */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Recursos de Acessibilidade</Text>
          
          <TouchableOpacity style={styles.btnChecklist} activeOpacity={0.8}>
            <Text style={styles.btnChecklistText}>Ver checklist completo</Text>
            <MaterialCommunityIcons name="format-list-bulleted" size={18} color={COLORS.text} />
          </TouchableOpacity>

          <View style={styles.chipContainer}>
            <View style={[styles.chip, styles.chipActive]}><Text style={styles.chipTextActive}>Rampas de acesso</Text></View>
            <View style={[styles.chip, styles.chipActive]}><Text style={styles.chipTextActive}>Sinalização em Braille</Text></View>
            <View style={styles.chip}><Text style={styles.chipText}>Banheiros adaptados</Text></View>
            <View style={[styles.chip, styles.chipActive]}><Text style={styles.chipTextActive}>Piso tátil</Text></View>
          </View>
        </View>

        {/* Comentários */}
        <View style={styles.card}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="comment-outline" size={24} color={COLORS.text} />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.sectionTitle}>Comentários</Text>
              <Text style={styles.address}>23 comentários da comunidade</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigate('evaluate')}>
          <Text style={styles.btnPrimaryText}>Avaliar este Local</Text>
        </TouchableOpacity>

      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: COLORS.white, borderRadius: 16, padding: 20, marginBottom: 16, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05 },
  title: { fontSize: 20, fontWeight: '800', color: COLORS.text, marginBottom: 4 },
  subtitle: { fontSize: 14, color: COLORS.gray, marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center' },
  address: { fontSize: 13, color: COLORS.gray, marginLeft: 6, flex: 1 },
  noteBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.successBg, padding: 16, borderRadius: 14, marginTop: 16 },
  bigNote: { fontSize: 32, fontWeight: '900', color: COLORS.text, marginLeft: 4 },
  noteText: { fontSize: 14, fontWeight: '700', color: COLORS.successText },
  noteAval: { fontSize: 12, color: COLORS.gray, marginTop: 2 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: COLORS.text, marginBottom: 12 },
  btnChecklist: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F4F6', padding: 12, borderRadius: 10, marginBottom: 16 },
  btnChecklistText: { fontSize: 14, fontWeight: '600', color: COLORS.text, marginRight: 8 },
  chipContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: '#F3F4F6', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8, borderWidth: 1, borderColor: COLORS.border },
  chipActive: { backgroundColor: COLORS.successBg, borderColor: COLORS.successText },
  chipText: { color: COLORS.gray, fontSize: 13, fontWeight: '600', textAlign: 'center' },
  chipTextActive: { color: COLORS.text, fontSize: 13, fontWeight: '600', textAlign: 'center' },
  btnPrimary: { backgroundColor: COLORS.primary, padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 8 },
  btnPrimaryText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 },
});