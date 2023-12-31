import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  ToastAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import rncStyles from 'rncstyles';
import SKButton from '../components/SKButton';
import {reset} from '../config/redux/reducers/LoginSlice';

export default function Profile({navigation}: any) {
  const user = useSelector((a: any) => a.login.user);
  const dispatch = useDispatch();

  return (
    <>
      <View style={[rncStyles.h100, rncStyles.bgWhite]}>
        <View style={[rncStyles.h100, rncStyles.justifyContentCenter]}>
          <ScrollView>
            <View style={[rncStyles.p2, rncStyles.py5]}>
              <View style={rncStyles.flexCenter}>
                <Image
                  resizeMode="contain"
                  style={[rncStyles.roundedPill, {width: 140, height: 140}]}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xKaQDRmiaG94pbm-BCrgPSZRksQ_BSGxmY3qGxEPI_DYyVLB2QpDM02N81rto21mths&usqp=CAU',
                  }}
                />
              </View>
              <View style={rncStyles.flexCenter}>
                <Text
                  style={[
                    rncStyles.fs1,
                    rncStyles.textPrimary,
                    rncStyles.textBold,
                    rncStyles.mb1,
                  ]}>
                  {user.userName}
                </Text>
                <Text style={[rncStyles.fs5, rncStyles.textSecondary]}>
                  {user.email}
                </Text>
                {/* <TouchableOpacity
                  style={[
                    rncStyles.btnPrimary,
                    rncStyles.mt1,
                    {backgroundColor: '#675fe4'},
                  ]}>
                  <Text style={rncStyles.textWhite}>Edit Profile</Text>
                </TouchableOpacity> */}
              </View>
            </View>

            <View style={rncStyles.p2}>
              <View
                style={[
                  rncStyles.p1,
                  rncStyles.mb2,
                  rncStyles.borderBottom1,
                  rncStyles.borderLight,
                ]}>
                <Text style={[rncStyles.textSecondary, rncStyles.textBold]}>
                  Full Name
                </Text>
                <Text
                  style={[
                    rncStyles.textPrimary,
                    rncStyles.textBold,
                    rncStyles.fs3,
                  ]}>
                  {user.firstName + ' ' + user.lastName}
                </Text>
              </View>
              <View
                style={[
                  rncStyles.p1,
                  rncStyles.mb2,
                  rncStyles.borderBottom1,
                  rncStyles.borderLight,
                ]}>
                <Text style={[rncStyles.textSecondary, rncStyles.textBold]}>
                  Email
                </Text>
                <Text
                  style={[
                    rncStyles.textPrimary,
                    rncStyles.textBold,
                    rncStyles.fs3,
                  ]}>
                  {user.email}
                </Text>
              </View>
              <View
                style={[
                  rncStyles.p1,
                  rncStyles.mb2,
                  rncStyles.borderBottom1,
                  rncStyles.borderLight,
                ]}>
                <Text style={[rncStyles.textSecondary, rncStyles.textBold]}>
                  Gender
                </Text>
                <Text
                  style={[
                    rncStyles.textPrimary,
                    rncStyles.textBold,
                    rncStyles.fs3,
                  ]}>
                  {user.gender}
                </Text>
              </View>
              <View
                style={[
                  rncStyles.p1,
                  rncStyles.mb2,
                  rncStyles.borderBottom1,
                  rncStyles.borderLight,
                ]}>
                <Text style={[rncStyles.textSecondary, rncStyles.textBold]}>
                  Contact
                </Text>
                <Text
                  style={[
                    rncStyles.textPrimary,
                    rncStyles.textBold,
                    rncStyles.fs3,
                  ]}>
                  {user.contact}
                </Text>
              </View>
              <View
                style={[
                  rncStyles.p1,
                  rncStyles.mb2,
                  rncStyles.borderBottom1,
                  rncStyles.borderLight,
                ]}>
                <Text style={[rncStyles.textSecondary, rncStyles.textBold]}>
                  Bio
                </Text>
                <Text
                  style={[
                    rncStyles.textPrimary,
                    rncStyles.textBold,
                    rncStyles.fs3,
                  ]}>
                  {user.bio}
                </Text>
              </View>
              <View
                style={[
                  rncStyles.p1,
                  rncStyles.mb2,
                  rncStyles.borderBottom1,
                  rncStyles.borderLight,
                ]}>
                <Text style={[rncStyles.textSecondary, rncStyles.textBold]}>
                  Address
                </Text>
                <Text
                  style={[
                    rncStyles.textPrimary,
                    rncStyles.textBold,
                    rncStyles.fs3,
                  ]}>
                  {user.address}
                </Text>
              </View>
              <View style={rncStyles.py2}>
                <SKButton
                  color="purple"
                  label="Logout"
                  onPress={() => {
                    dispatch(reset());
                    navigation.navigate('Sign In');
                    ToastAndroid.show(
                      'Logout successfully',
                      ToastAndroid.SHORT,
                    );
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
