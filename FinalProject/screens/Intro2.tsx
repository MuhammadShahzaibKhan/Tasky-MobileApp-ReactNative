import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import intro2 from '../assets/images/intro2.png';
import dots from '../assets/images/dots.png';
import rightArrow from '../assets/images/arrow-right.png';
import rncStyles from 'rncstyles';

export default function Intro2({navigation}: any) {
  const nextPage = () => {
    navigation.navigate('Intro3');
  };
  return (
    <View style={[rncStyles.h100, {backgroundColor: '#fff'}]}>
      <View>
        <Image
          source={intro2}
          resizeMode="cover"
          style={{width: 400, height: 440}}
        />
      </View>
      <View style={[rncStyles.px3, rncStyles.py3]}>
        <Text
          style={[
            rncStyles.fs4,
            rncStyles.pt3,
            rncStyles.pb2,
            {color: '#756ef3', fontWeight: 500},
          ]}>
          Task Management
        </Text>
        <Text style={[rncStyles.pe5, rncStyles.textSecondary, {fontSize: 40}]}>
          Work more{' '}
          <Text style={{color: '#756ef3', fontWeight: 'bold'}}>Structured</Text>{' '}
          and Organized.
        </Text>
        <View style={[rncStyles.py1]}>
          <Image source={dots} resizeMode="contain" width={200} height={200} />
        </View>
      </View>
      <View
        style={[
          rncStyles.flexRow,
          rncStyles.justifyContentBetween,
          {marginTop: 4},
        ]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Sign In');
          }}>
          <View style={[rncStyles.p3]}>
            <Text
              style={[
                rncStyles.textSecondary,
                rncStyles.fs4,
                {fontWeight: '500'},
              ]}>
              Skip
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={nextPage}
            style={[rncStyles.roundedTopLeft, {backgroundColor: '#756ef3'}]}>
            <Image
              source={rightArrow}
              style={[rncStyles.m2, {backgroundColor: '#756ef3'}]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
