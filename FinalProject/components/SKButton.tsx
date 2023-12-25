import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import rncStyles from 'rncstyles';

export default function SKButton({
  loading,
  disabled,
  label,
  onPress,
  color,
}: any) {
  return (
    <View style={rncStyles.py1}>
      <TouchableOpacity
        disabled={disabled || loading}
        onPress={onPress}
        style={
          color == 'info'
            ? rncStyles.btnInfo
            : color == 'error'
            ? rncStyles.btnDanger
            : color == 'purple'
            ? [rncStyles.btn, rncStyles.rounded, {backgroundColor: '#675fe4'}]
            : rncStyles.btnPrimary
        }>
        {!loading ? (
          <Text
            style={[rncStyles.textWhite, rncStyles.textCenter, rncStyles.fs4]}>
            {label}
          </Text>
        ) : (
          <ActivityIndicator size="small" color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
}
