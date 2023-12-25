import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {_dark} from 'rncstyles';

export default function SKIcon({name, color, size, style, onPress}: any) {
  return (
    <Icon
      name={name}
      color={color ?? _dark}
      size={size ?? 25}
      style={[style]}
      onPress={onPress}
    />
  );
}
