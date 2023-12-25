import React from 'react';
import {Text, TextInput, View} from 'react-native';
import rncStyles from 'rncstyles';

export default function SKTextArea({
  placeholder,
  onChangeText,
  label,
  value,
}: any) {
  return (
    <View style={[rncStyles.py1]}>
      <Text style={[rncStyles.textPrimary, rncStyles.p1]}>{label}</Text>

      <TextInput
        multiline={true}
        numberOfLines={2}
        verticalAlign="top"
        style={[
          rncStyles.input,
          rncStyles.bgWhite,
          rncStyles.rounded,
          rncStyles.border1,
          rncStyles.borderPrimary,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
}
