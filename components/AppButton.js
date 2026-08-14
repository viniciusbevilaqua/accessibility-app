import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const COLORS = {
  primary: '#2F3A8F',
  white: '#FFFFFF',
  border: '#E5E7EB',
};

export default function AppButton({ title, onPress, variant = 'primary' }) {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: isPrimary ? COLORS.primary : COLORS.white,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        borderWidth: isPrimary ? 0 : 1,
        borderColor: COLORS.border,
        marginTop: 10,
      }}
      activeOpacity={0.85}
    >
      <Text
        style={{
          color: isPrimary ? COLORS.white : COLORS.primary,
          fontWeight: '800',
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}