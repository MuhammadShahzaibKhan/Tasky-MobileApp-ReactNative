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
import SKIcon from '../components/SKIcon';

export default function ProgessProjects({navigation}: any) {
  const [taskList, setTaskList] = useState<any>([]);
  const [filterList, setFilterList] = useState<any>([]);
  const [selectedBox, setSelectedBox] = useState<string>('Favorites');

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
              let arr = taskList.filter((x: any) => {
                if (!e) {
                  setFilterList([]);
                  return;
                }
                if (x.taskName.toLowerCase().includes(e.toLowerCase())) {
                  return x;
                } else if (
                  x.taskDescription.toLowerCase().includes(e.toLowerCase())
                ) {
                  return x;
                }
                // else if (
                //   x.createdBy.toLowerCase().includes(e.toLowerCase())
                // ) {
                //   return x;
                // }
              });
              setFilterList([...arr]);
            }}
            placeholder="Search"
          />
        </View>
        <View
          style={[
            rncStyles.flexRow,
            rncStyles.alignItemsCenter,
            rncStyles.justifyContentBetween,
          ]}>
          <View style={[rncStyles.flexRow, rncStyles.my2]}>
            {['Favorites', 'Recents', 'All'].map((box, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedBox(box)}
                activeOpacity={0.7}>
                <View
                  style={[
                    rncStyles.mx1,
                    rncStyles.border1,
                    rncStyles.roundedPill,
                    {
                      borderColor:
                        selectedBox === box ? '#756ef3' : 'transparent',
                      paddingVertical: 6,
                      paddingHorizontal: 13,
                    },
                  ]}>
                  <Text style={[rncStyles.fs5]}>{box}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity>
            <View style={[rncStyles.mx1]}>
              <SKIcon name="widgets" color="#7d828b" />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            {filterList.length > 0
              ? filterList
                  .filter((data: any) => data.isWork === 'In Progress')
                  .map((x: any, i: any) => (
                    <View>
                      <View
                        key={i}
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
                              rncStyles.fs4,
                              {color: '#002055', marginVertical: 5},
                            ]}>
                            {x.taskName}
                          </Text>
                          <Text
                            style={[
                              rncStyles.my4,
                              {
                                color: '#848a94',
                                fontSize: 18,
                                marginVertical: 2,
                              },
                            ]}
                            numberOfLines={2}>
                            {x.taskDescription}
                          </Text>
                          <Text
                            style={{
                              color: '#848a94',
                              fontSize: 12,
                              marginVertical: 2,
                            }}>
                            {x.date}
                          </Text>
                          <Text
                            style={{
                              color: '#756ef3',
                              fontSize: 12,
                              marginVertical: 2,
                            }}>
                            Created By: {x.createdBy}
                          </Text>
                        </View>
                        <View>
                          <TouchableOpacity>
                            <SKIcon
                              name="more-horiz"
                              color="#848a94"
                              onPress={() => {
                                navigation.navigate('Project Details', x);
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  ))
              : taskList
                  .filter((data: any) => data.isWork === 'In Progress')
                  .map((x: any, i: any) => (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Project Details', x);
                        }}>
                        <View
                          key={i}
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
                                rncStyles.fs4,
                                {color: '#002055', marginVertical: 5},
                              ]}>
                              {x.taskName}
                            </Text>
                            <Text
                              style={{
                                color: '#848a94',
                                fontSize: 18,
                                marginVertical: 2,
                              }}>
                              {x.taskDescription}
                            </Text>
                            <Text
                              style={{
                                color: '#848a94',
                                fontSize: 12,
                                marginVertical: 2,
                              }}>
                              {x.date}
                            </Text>
                            <Text
                              style={{
                                color: '#756ef3',
                                fontSize: 12,
                                marginVertical: 2,
                              }}>
                              Created By: {x.createdBy}
                            </Text>
                          </View>
                          <View>
                            <TouchableOpacity>
                              <SKIcon
                                name="more-horiz"
                                color="#848a94"
                                onPress={() => {
                                  navigation.navigate('Project Details', x);
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
