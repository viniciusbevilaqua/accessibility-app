import React, { useState, useMemo } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';

const COLORS = {
  primary: '#2F3A8F',
  secondary: '#F5F6FA',
  accent: '#F9A826',
  white: '#FFFFFF',
  text: '#1C1C1E',
  gray: '#8E8E93',
  border: '#D1D5DB',
  success: '#34C759',
};

export default function EvaluateScreen({ navigate, goBack, screen }) {
  // Controle de qual etapa estamos (cadastro, endereco, avaliacao, confirmacao)
  const [step, setStep] = useState('cadastro');

  // Estados dos formulários (Parte do Vinicius)
  const [placeName, setPlaceName] = useState('');
  const [placeType, setPlaceType] = useState('Selecione o tipo');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  
  const [accessibilityItems, setAccessibilityItems] = useState([
    { key: 'rampas', label: 'Rampas de acesso', checked: false },
    { key: 'piso', label: 'Piso tátil', checked: false },
    { key: 'banheiros', label: 'Banheiros adaptados', checked: false },
    { key: 'braille', label: 'Sinalização em Braille', checked: false },
    { key: 'libras', label: 'Intérprete de Libras', checked: false },
  ]);

  const toggleChecklistItem = (key) => {
    setAccessibilityItems(current =>
      current.map(item => item.key === key ? { ...item, checked: !item.checked } : item)
    );
  };

  // Funções de navegação interna
  const nextStep = (target) => setStep(target);
  const prevStep = () => {
    if (step === 'endereco') setStep('cadastro');
    else if (step === 'avaliacao') setStep('endereco');
    else if (step === 'confirmacao') setStep('avaliacao');
  };

  // Título dinâmico para o Header
  const getTitle = () => {
    if (step === 'cadastro') return 'Cadastrar Novo Local';
    if (step === 'endereco') return 'Endereço do Local';
    if (step === 'avaliacao') return 'Nova Avaliação';
    return 'Avaliação Enviada';
  };

  return (
    <Screen 
      title={getTitle()} 
      screen={screen} 
      navigate={navigate} 
      goBack={step === 'cadastro' ? goBack : prevStep}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        
        {/* ETAPA 1: DADOS BÁSICOS */}
        {step === 'cadastro' && (
          <View>
            <Text style={styles.label}>Nome do Local</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Ex: Shopping Center Norte" 
              value={placeName}
              onChangeText={setPlaceName}
            />

            <Text style={styles.label}>Tipo do Local</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={{ color: COLORS.gray }}>{placeType}</Text>
              <MaterialCommunityIcons name="chevron-down" size={20} color={COLORS.gray} />
            </TouchableOpacity>

            <View style={styles.infoCard}>
              <MaterialCommunityIcons name="information-outline" size={24} color={COLORS.primary} />
              <Text style={styles.infoText}>
                <Text style={{ fontWeight: 'bold' }}>Dica:</Text> Verifique se o local já não está cadastrado no mapa antes de prosseguir.
              </Text>
            </View>

            <TouchableOpacity style={styles.btnPrimary} onPress={() => nextStep('endereco')}>
              <Text style={styles.btnText}>Próximo: Endereço</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ETAPA 2: ENDEREÇO */}
        {step === 'endereco' && (
          <View>
            <Text style={styles.label}>Rua / Avenida</Text>
            <TextInput style={styles.input} placeholder="Ex: Travessa Casalbuono" value={street} onChangeText={setStreet} />
            
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Número</Text>
                <TextInput style={styles.input} placeholder="123" value={number} onChangeText={setNumber} keyboardType="numeric" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Bairro</Text>
                <TextInput style={styles.input} placeholder="Ex: Centro" value={district} onChangeText={setDistrict} />
              </View>
            </View>

            <View style={styles.infoCardGray}>
              <MaterialCommunityIcons name="map-marker-outline" size={24} color={COLORS.gray} />
              <Text style={[styles.infoText, { color: COLORS.gray }]}>
                O endereço ajuda outras pessoas a encontrarem o local no mapa.
              </Text>
            </View>

            <TouchableOpacity style={styles.btnPrimary} onPress={() => nextStep('avaliacao')}>
              <Text style={styles.btnText}>Próximo: Avaliar</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ETAPA 3: AVALIAÇÃO E CHECKLIST */}
        {step === 'avaliacao' && (
          <View>
            <View style={styles.whiteCard}>
              <Text style={styles.cardTitle}>Nota Geral</Text>
              <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <TouchableOpacity key={s} onPress={() => setRating(s)}>
                    <MaterialCommunityIcons 
                      name={rating >= s ? "star" : "star-outline"} 
                      size={40} 
                      color={rating >= s ? COLORS.accent : COLORS.border} 
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.whiteCard}>
              <Text style={styles.cardTitle}>Recursos Disponíveis</Text>
              <Text style={styles.cardSub}>Marque o que encontrou no local:</Text>
              
              {accessibilityItems.map((item) => (
                <TouchableOpacity 
                  key={item.key} 
                  style={styles.checkRow} 
                  onPress={() => toggleChecklistItem(item.key)}
                >
                  <MaterialCommunityIcons 
                    name={item.checked ? "checkbox-marked" : "checkbox-blank-outline"} 
                    size={24} 
                    color={item.checked ? COLORS.primary : COLORS.gray} 
                  />
                  <Text style={styles.checkLabel}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Comentário (opcional)</Text>
            <TextInput 
              style={[styles.input, { height: 100, textAlignVertical: 'top' }]} 
              placeholder="Conte mais sobre sua experiência..."
              multiline
              value={comment}
              onChangeText={setComment}
            />

            <TouchableOpacity style={styles.btnPrimary} onPress={() => nextStep('confirmacao')}>
              <Text style={styles.btnText}>Enviar Avaliação</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ETAPA 4: CONFIRMAÇÃO */}
        {step === 'confirmacao' && (
          <View style={{ alignItems: 'center', marginTop: 40 }}>
            <MaterialCommunityIcons name="check-circle" size={100} color={COLORS.success} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: COLORS.text, marginTop: 20 }}>Sucesso!</Text>
            <Text style={{ textAlign: 'center', color: COLORS.gray, marginTop: 10, paddingHorizontal: 40 }}>
              Sua avaliação foi enviada e ajudará centenas de pessoas.
            </Text>
            <TouchableOpacity 
              style={[styles.btnPrimary, { width: '100%', marginTop: 40 }]} 
              onPress={() => navigate('home')}
            >
              <Text style={styles.btnText}>Voltar para Início</Text>
            </TouchableOpacity>
          </View>
        )}

      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 15, fontWeight: '700', color: COLORS.text, marginBottom: 8, marginTop: 16 },
  input: { 
    backgroundColor: COLORS.white, 
    borderWidth: 1, 
    borderColor: COLORS.border, 
    borderRadius: 12, 
    padding: 14, 
    fontSize: 16 
  },
  dropdown: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoCard: {
    backgroundColor: '#EEF1F7',
    padding: 16,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary
  },
  infoCardGray: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  infoText: { flex: 1, marginLeft: 12, fontSize: 14, color: COLORS.text, lineHeight: 20 },
  btnPrimary: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30
  },
  btnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 },
  whiteCard: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 16,
    marginTop: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 }
  },
  cardTitle: { fontSize: 17, fontWeight: 'bold', color: COLORS.text, textAlign: 'center', marginBottom: 10 },
  cardSub: { fontSize: 14, color: COLORS.gray, marginBottom: 15, textAlign: 'center' },
  starsRow: { flexDirection: 'row', justifyContent: 'center', gap: 8 },
  checkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  checkLabel: { fontSize: 16, color: COLORS.text, marginLeft: 12 }
});