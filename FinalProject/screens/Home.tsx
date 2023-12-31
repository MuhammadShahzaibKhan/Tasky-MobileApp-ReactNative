import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import rncStyles from 'rncstyles';
import greenDot from '../assets/images/record.png';
import orangeDot from '../assets/images/circle.png';
import purpleDot from '../assets/images/round.png';
import {Get} from '../config/ApiMethods/ApiMethods';

export default function Home({navigation}: any) {
  const [taskList, setTaskList] = useState<any>([]);
  const user = useSelector((a: any) => a.login.user);

  const get = () => {
    Get('/task')
      .then((res: any) => {
        console.log(res.data.data);
        setTaskList([...res.data.data]);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Screen was focused
      get();
      // Do something
    });

    return unsubscribe;
  }, []);

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
                borderTopWidth: 15,
                borderTopColor: '#756ef3',
                borderRightWidth: 15,
                borderRightColor: '#ffb35a',
                borderBottomWidth: 15,
                borderBottomColor: '#756ef3',
                borderLeftWidth: 15,
                borderLeftColor: '#b1d199',
                width: 200,
                height: 200,
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Completed Projects');
            }}>
            <View
              style={[
                rncStyles.mx3,
                rncStyles.border1,
                rncStyles.rounded,
                rncStyles.p2,
                {borderColor: '#756ef3'},
              ]}>
              <View>
                <Text style={[rncStyles.fs4, {color: '#002055'}]}>
                  Completed
                </Text>
              </View>
              <View>
                <Text>
                  {
                    taskList.filter((data: any) => data.isWork === 'Completed')
                      .length
                  }{' '}
                  Task Completed
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('In Progess Projects');
            }}>
            <View
              style={[
                rncStyles.mx3,
                rncStyles.rounded,
                rncStyles.p2,
                {borderColor: '#756ef3'},
              ]}>
              <View>
                <Text style={[rncStyles.fs4, {color: '#002055'}]}>
                  In Progess
                </Text>
              </View>
              <View>
                <Text>
                  {
                    taskList.filter(
                      (data: any) => data.isWork === 'In Progress',
                    ).length
                  }{' '}
                  Task now . 1 Started
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Todo Projects');
            }}>
            <View
              style={[
                rncStyles.mx3,
                rncStyles.rounded,
                rncStyles.p2,
                {borderColor: '#756ef3'},
              ]}>
              <View>
                <Text style={[rncStyles.fs4, {color: '#002055'}]}>To Do</Text>
              </View>
              <View>
                <Text>
                  {
                    taskList.filter((data: any) => data.isWork === 'Todo')
                      .length
                  }{' '}
                  Task now . 1 Upcoming
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
