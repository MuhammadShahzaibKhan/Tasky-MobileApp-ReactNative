import {Text, ToastAndroid, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import rncStyles from 'rncstyles';
import SKButton from '../components/SKButton';
import {Delete} from '../config/ApiMethods/ApiMethods';

export default function SingleProject({navigation, route}: any) {
  const obj = route.params;

  const del = (id: any) => {
    Delete(`task/del`, id)
      .then(res => {
        ToastAndroid.show('Deleted successfully', ToastAndroid.SHORT);
        navigation.goBack();
      })
      .catch(err => {
        alert('Something went wrong');
      });
  };

  return (
    <SafeAreaView>
      <View
        style={[
          rncStyles.h100,
          rncStyles.bgWhite,
          rncStyles.justifyContentCenter,
        ]}>
        <View
          style={[
            rncStyles.m2,
            rncStyles.border1,
            rncStyles.rounded,
            rncStyles.p1,
            {borderColor: '#b9b6f8'},
          ]}>
          <View style={[rncStyles.my1]}>
            <Text style={[rncStyles.fs3, {color: '#002055'}]}>
              <Text style={[rncStyles.fs4, {fontWeight: '600'}]}>
                Project Name:{' '}
              </Text>
              {obj.taskName}
            </Text>
          </View>
          <View style={[rncStyles.my1]}>
            <Text style={[rncStyles.fs3, {color: '#002055'}]}>
              <Text style={[rncStyles.fs4, {fontWeight: '600'}]}>
                Project Description:{' '}
              </Text>
              {obj.taskDescription}
            </Text>
          </View>
          <View style={[rncStyles.my1]}>
            <Text style={[rncStyles.fs3, {color: '#002055'}]}>
              <Text style={[rncStyles.fs4, {fontWeight: '600'}]}>
                Created Date:{' '}
              </Text>
              {obj.date}
            </Text>
          </View>
          <View style={[rncStyles.my1]}>
            <Text style={[rncStyles.fs3, {color: '#002055'}]}>
              <Text style={[rncStyles.fs4, {fontWeight: '600'}]}>
                Created By:{' '}
              </Text>
              {obj.createdBy}
            </Text>
          </View>
          <View style={[rncStyles.my1]}>
            <Text style={[rncStyles.fs3, {color: '#002055'}]}>
              <Text style={[rncStyles.fs4, {fontWeight: '600'}]}>
                Start Time:{' '}
              </Text>
              {obj.startTime}
            </Text>
          </View>
          <View style={[rncStyles.my1]}>
            <Text style={[rncStyles.fs3, {color: '#002055'}]}>
              <Text style={[rncStyles.fs4, {fontWeight: '600'}]}>
                End Time:{' '}
              </Text>
              {obj.endTime}
            </Text>
          </View>
        </View>
        <View
          style={[
            rncStyles.mx2,
            rncStyles.flexRow,
            rncStyles.justifyContentAround,
          ]}>
          <SKButton label="Mark As Todo" color="purple" />
          <SKButton
            label="Delete"
            color="error"
            onPress={() => {
              del(obj._id);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
