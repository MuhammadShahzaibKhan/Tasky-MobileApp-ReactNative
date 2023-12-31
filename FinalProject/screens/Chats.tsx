import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import rncStyles from 'rncstyles';
import {Get} from '../config/ApiMethods/ApiMethods';
import SKIconButton from '../components/SKIconButton';
import SKIcon from '../components/SKIcon';

export default function Projects({navigation}: any) {
  const [filterList, setFilterList] = useState<any>([]);

  let dummyData = [
    {
      name: 'Jenny Alxinder',
      activeTime: 'Active Now',
    },
    {
      name: 'Team Align',
      activeTime: 'Active 1h ago',
    },
    {
      name: 'Alex Avishek',
      activeTime: 'Active 1h ago',
    },
    {
      name: 'Jafor Dicrose',
      activeTime: 'Active 1h ago',
    },
  ];

  return (
    <SafeAreaView>
      <View style={[rncStyles.h100, rncStyles.p2, rncStyles.bgWhite]}>
        <View
          style={[
            rncStyles.bgWhite,
            rncStyles.rounded,
            rncStyles.border1,
            rncStyles.borderPrimary,
            rncStyles.px1,
            rncStyles.flexRow,
            rncStyles.alignItemsCenter,
            rncStyles.my1,
            {borderColor: '#e9f1ff'},
          ]}>
          <SKIcon name="search" color="#7d828b" size={30} />
          <TextInput
            style={[rncStyles.fs5, {width: '95%'}]}
            keyboardType="default"
            onChangeText={(e: any) => {
              let arr = dummyData.filter((x: any) => {
                if (!e) {
                  setFilterList([]);
                  return;
                }
                if (x.name.toLowerCase().includes(e.toLowerCase())) {
                  return x;
                }
              });
              setFilterList([...arr]);
            }}
            placeholder="Search"
          />
        </View>
        <ScrollView>
          <View>
            {filterList.length > 0
              ? filterList.map((x: any, i: any) => (
                  <View>
                    <View
                      style={[
                        rncStyles.m1,
                        rncStyles.border1,
                        rncStyles.rounded,
                        rncStyles.py1,
                        rncStyles.px2,
                        rncStyles.flexRow,
                        rncStyles.justifyContentBetween,
                        rncStyles.alignItemsCenter,
                        {borderColor: '#e9f1ff'},
                      ]}>
                      <View>
                        <Text
                          style={[
                            rncStyles.fs5,
                            {color: '#002055', marginVertical: 5},
                          ]}>
                          {x.name}
                        </Text>
                        <Text style={{color: '#848a94', fontSize: 13}}>
                          {x.activeTime}
                        </Text>
                      </View>
                      <View>
                        <TouchableOpacity>
                          <SKIconButton name="photo-camera" color="#848a94" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))
              : dummyData.map((x: any, i: any) => (
                  <View>
                    <View
                      style={[
                        rncStyles.m1,
                        rncStyles.border1,
                        rncStyles.rounded,
                        rncStyles.p2,
                        rncStyles.flexRow,
                        rncStyles.justifyContentBetween,
                        rncStyles.alignItemsCenter,
                        {borderColor: '#e9f1ff'},
                      ]}>
                      <View>
                        <Text
                          style={[
                            rncStyles.fs5,
                            {color: '#002055', marginVertical: 5},
                          ]}>
                          {x.name}
                        </Text>
                        <Text style={{color: '#848a94', fontSize: 13}}>
                          {x.activeTime}
                        </Text>
                      </View>
                      <View>
                        <TouchableOpacity>
                          <SKIconButton name="photo-camera" color="#848a94" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
