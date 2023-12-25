import React from 'react';
import {Text, TextInput, View} from 'react-native';
import rncStyles from 'rncstyles';

export default function SKInput({
  placeholder,
  onChangeText,
  label,
  value,
  keyboardType,
  secureTextEntry,
  borderColor,
}: any) {
  return (
    <View style={[rncStyles.py1]}>
      <Text style={[rncStyles.textPrimary, rncStyles.p1]}>{label}</Text>

      <TextInput
        keyboardType={keyboardType}
        style={[
          rncStyles.input,
          rncStyles.bgWhite,
          rncStyles.rounded,
          rncStyles.border1,
          rncStyles.borderPrimary,
          borderColor && {borderColor: '#e9f1ff'},
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
