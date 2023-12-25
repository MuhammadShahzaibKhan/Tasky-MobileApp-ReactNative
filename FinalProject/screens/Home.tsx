import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import rncStyles from 'rncstyles';
import greenDot from '../assets/images/record.png';
import orangeDot from '../assets/images/circle.png';
import purpleDot from '../assets/images/round.png';

export default function Home() {
  const user = useSelector((a: any) => a.login.user);
  const [selectedView, setSelectedView] = useState<any>('todo');
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <SafeAreaView>
      <View style={[rncStyles.h100, rncStyles.bgWhite]}>
        <View style={[rncStyles.alignItemsCenter]}>
          <View
            style={[
              rncStyles.roundedPill,
              rncStyles.flexCenter,
              rncStyles.my2,
              {
                borderTopWidth: 20,
                borderTopColor: '#b1d199',
                borderRightWidth: 20,
                borderRightColor: '#ffb35a',
                borderBottomWidth: 20,
                borderBottomColor: '#756ef3',
                borderLeftWidth: 20,
                borderLeftColor: '#b1d199',
                width: 210,
                height: 210,
              },
            ]}>
            <Text
              style={[rncStyles.fsL, {fontWeight: 'bold', color: '#002055'}]}>
              65%
            </Text>
            <Text style={[rncStyles.fs3, {color: '#868d95'}]}>Complete</Text>
          </View>
        </View>
        <View
          style={[
            rncStyles.flexRow,
            rncStyles.justifyContentBetween,
            rncStyles.mx4,
          ]}>
          <View>
            <Text style={[rncStyles.fs5, {color: '#002055'}]}>
              <Image source={greenDot} resizeMode="cover" /> To Do
            </Text>
          </View>
          <View>
            <Text style={[rncStyles.fs5, {color: '#002055'}]}>
              <Image source={orangeDot} resizeMode="cover" /> In Progess
            </Text>
          </View>
          <View>
            <Text style={[rncStyles.fs5, {color: '#002055'}]}>
              <Image source={purpleDot} resizeMode="cover" /> Completed
            </Text>
          </View>
        </View>
        <View>
          <View style={[rncStyles.my2, rncStyles.mx2]}>
            <Text
              style={[rncStyles.fs3, {fontWeight: '500', color: '#002055'}]}>
              Monthly
            </Text>
          </View>
          <TouchableOpacity onPress={handlePress}>
            <View
              style={[
                rncStyles.mx3,
                rncStyles.border1,
                rncStyles.rounded,
                rncStyles.p2,
                {borderColor: isSelected ? '#756ef3' : '#e9f1ff'},
              ]}>
              <View>
                <Text style={[rncStyles.fs4, {color: '#002055'}]}>
                  Completed
                </Text>
              </View>
              <View>
                <Text>18 Task now . 18 Task Completed</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <View
              style={[
                rncStyles.mx3,
                rncStyles.rounded,
                rncStyles.p2,
                {borderColor: isSelected ? '#756ef3' : '#e9f1ff'},
              ]}>
              <View>
                <Text style={[rncStyles.fs4, {color: '#002055'}]}>
                  In Progess
                </Text>
              </View>
              <View>
                <Text>2 Task now . 1 Started</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <View
              style={[
                rncStyles.mx3,
                rncStyles.rounded,
                rncStyles.p2,
                {borderColor: isSelected ? '#756ef3' : '#e9f1ff'},
              ]}>
              <View>
                <Text style={[rncStyles.fs4, {color: '#002055'}]}>To Do</Text>
              </View>
              <View>
                <Text>2 Task now . 1 Upcoming</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
