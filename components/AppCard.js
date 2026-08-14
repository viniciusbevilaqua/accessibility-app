import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const COLORS = {
  text: '#1C1C1E',
  gray: '#8E8E93',
  white: '#FFFFFF',
  border: '#E5E7EB',
};

export default function AppCard({ title, subtitle, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: COLORS.white,
        padding: 16,
        borderRadius: 18,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: COLORS.border,
      }}
      activeOpacity={0.9}
    >
      <Text style={{ fontSize: 17, fontWeight: '800', color: COLORS.text }}>
        {title}
      </Text>
      <Text style={{ color: COLORS.gray, marginTop: 4, lineHeight: 20 }}>
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
}