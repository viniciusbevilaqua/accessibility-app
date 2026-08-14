import React from 'react';
import { TextInput } from 'react-native';

const COLORS = {
  white: '#FFFFFF',
  border: '#E5E7EB',
  gray: '#8E8E93',
};

export default function AppInput({ placeholder, value, onChangeText, multiline = false }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      style={{
        backgroundColor: COLORS.white,
        borderColor: COLORS.border,
        borderWidth: 1,
        borderRadius: 16,
        padding: 14,
        minHeight: multiline ? 100 : 52,
        marginBottom: 12,
        textAlignVertical: multiline ? 'top' : 'center',
        color: '#1C1C1E',
      }}
    />
  );
}