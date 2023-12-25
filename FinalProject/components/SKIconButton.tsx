import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import SKIcon from './SKIcon';
import rncStyles from 'rncstyles';

export default function SKIconButton({onPress, name, size, style, color}: any) {
  return (
    <View>
      <TouchableOpacity
        style={[
          rncStyles.roundedPill,
          rncStyles.bgWhite,
          rncStyles.shadow1,
          rncStyles.flexCenter,
          {width: 50, height: 50},
        ]}
        onPress={onPress}>
        <SKIcon name={name} style={[style]} color={color} />
      </TouchableOpacity>
    </View>
  );
}
