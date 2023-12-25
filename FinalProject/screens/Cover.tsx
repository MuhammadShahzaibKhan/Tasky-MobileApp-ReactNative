import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import coverImg from '../assets/images/cover.png';
import rncStyles from 'rncstyles';

export default function Cover({navigation}: any) {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#5d49fd'}}>
        <View>
          <Image
            source={coverImg}
            style={{width: 412, height: 412}}
            resizeMode="cover"
          />
        </View>
        <View
          style={[
            {backgroundColor: '#fdfdff'},
            rncStyles.roundedTopRight,
            rncStyles.roundedTopLeft,
            rncStyles.h100,
          ]}>
          <View>
            <View>
              <Text style={[rncStyles.textCenter]}>
                <Text style={{color: '#7468ed'}}>---</Text> o o
              </Text>
            </View>
            <View style={[rncStyles.my1]}>
              <Text
                style={[
                  rncStyles.textCenter,
                  {color: '#756ef3', fontSize: 45, fontWeight: 'bold'},
                ]}>
                Taskcy
              </Text>
            </View>
            <View style={[rncStyles.mb1]}>
              <Text
                style={[
                  rncStyles.textCenter,
                  rncStyles.mx5,
                  {
                    fontSize: 50,
                    width: '80%',
                    color: '#2f394b',
                    fontWeight: 'bold',
                  },
                ]}>
                Bulding Better Workplaces
              </Text>
            </View>
            <View
              style={[
                rncStyles.mt1,
                rncStyles.mb5,
                {width: '80%', marginStart: '12%'},
              ]}>
              <Text
                style={[
                  rncStyles.textCenter,
                  {fontSize: 18, color: '#b9b9bb'},
                ]}>
                Create a unique emotinal Story that describes better than words
              </Text>
            </View>
            <View style={[rncStyles.flexCenter]}>
              <TouchableOpacity
                style={[
                  rncStyles.p2,
                  rncStyles.rounded,
                  {
                    backgroundColor: '#675fe4',
                    width: '80%',
                  },
                ]}
                onPress={() => {
                  navigation.navigate('Intro1');
                }}>
                <Text
                  style={[
                    rncStyles.textCenter,
                    rncStyles.fs3,
                    {
                      color: '#fff',
                      fontWeight: 'bold',
                      textShadowColor: '#fff',
                      textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 12,
                    },
                  ]}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
