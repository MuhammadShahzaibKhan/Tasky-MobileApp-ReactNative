import {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import rncStyles from 'rncstyles';
import SKInput from '../components/SKInput';
import SKButton from '../components/SKButton';
import {Post} from '../config/ApiMethods/ApiMethods';
import {useDispatch} from 'react-redux';
import {add} from '../config/redux/reducers/LoginSlice';
import appleLogo from '../assets/images/apple-logo.png';
import googleLogo from '../assets/images/search.png';
import SKTextArea from '../components/SKTextArea';

export default function SignUp({navigation}: any) {
  const [isLoading, setIsLoading] = useState<any>(false);
  const [model, setModel] = useState<any>({});
  const [show, setShow] = useState<any>(false);
  const dispatch = useDispatch();

  const signUpUser = () => {
    setIsLoading(true);
    Post('/auth/signup', model)
      .then((res: any) => {
        dispatch(add({...res}));
        ToastAndroid.show('Sign Up SuccessFully Completed', ToastAndroid.SHORT);
        <ActivityIndicator size="large" color="red" animating={show} />;
        setShow(true);
        setIsLoading(false);
        navigation.navigate('Tab');
      })
      .catch(err => {
        setIsLoading(false);
        Alert.alert('Error', 'Email Or Password is Incorrect');
        console.log(err.message);
      });
  };

  return (
    <>
      <ScrollView>
        <View style={[rncStyles.h100, rncStyles.bgWhite]}>
          <View style={[rncStyles.h100, rncStyles.p2]}>
            <View style={rncStyles.py5}>
              <Text
                style={[
                  rncStyles.fs1,
                  rncStyles.textPrimary,
                  rncStyles.textBold,
                  rncStyles.mb1,
                ]}>
                Create Account
              </Text>
              <Text
                style={[
                  rncStyles.fs4,
                  rncStyles.textSecondary,
                  rncStyles.pe5,
                  {color: '#b9b9bb'},
                ]}>
                Please enter your information and create your account
              </Text>
            </View>
            <View>
              <SKInput
                value={model.firstName}
                onChangeText={(e: any) => {
                  setModel({...model, firstName: e});
                }}
                placeholder="Enter First Name"
                label="First Name"
              />
              <SKInput
                value={model.lastName}
                onChangeText={(e: any) => {
                  setModel({...model, lastName: e});
                }}
                placeholder="Enter Last Name"
                label="Last Name"
              />
              <SKInput
                value={model.contact}
                onChangeText={(e: any) => {
                  setModel({...model, contact: e});
                }}
                placeholder="Enter Contact No"
                label="Contact No"
                keyboardType="number-pad"
              />
              <SKInput
                value={model.userName}
                onChangeText={(e: any) => {
                  setModel({...model, userName: e});
                }}
                placeholder="Enter User Name"
                label="User Name"
              />
              <SKInput
                value={model.email}
                onChangeText={(e: any) => {
                  setModel({...model, email: e});
                }}
                placeholder="Enter Email"
                label="Email"
              />
              <SKInput
                value={model.password}
                onChangeText={(e: any) => {
                  setModel({...model, password: e});
                }}
                placeholder="Enter 6-digit Password"
                label="Password"
                secureTextEntry={true}
              />
              <SKInput
                value={model.gender}
                onChangeText={(e: any) => {
                  setModel({...model, gender: e});
                }}
                placeholder="Enter Gender"
                label="Gender"
              />
              <SKTextArea
                value={model.address}
                onChangeText={(e: any) => {
                  setModel({...model, address: e});
                }}
                placeholder="Enter Address"
                label="Address"
              />
              <SKTextArea
                value={model.bio}
                onChangeText={(e: any) => {
                  setModel({...model, bio: e});
                }}
                placeholder="Enter Bio"
                label="Bio"
              />
              <View style={rncStyles.py1}>
                <TouchableOpacity>
                  <Text
                    style={[
                      rncStyles.textPrimary,
                      rncStyles.textBold,
                      rncStyles.fs5,
                      rncStyles.textEnd,
                    ]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={rncStyles.py2}>
                <SKButton
                  loading={isLoading}
                  onPress={signUpUser}
                  label="Sign Up"
                  color="purple"
                />
              </View>
            </View>
            <View style={[rncStyles.alignItemsCenter]}>
              <Text style={[rncStyles.fs5, {color: '#868d95'}]}>
                Signin With
              </Text>
              <View style={[rncStyles.flexRow, rncStyles.p4]}>
                <View
                  style={[
                    rncStyles.p1,
                    rncStyles.mx1,
                    rncStyles.border1,
                    rncStyles.rounded,
                    {borderColor: '#868d95'},
                  ]}>
                  <Image source={appleLogo} />
                </View>
                <View
                  style={[
                    rncStyles.p1,
                    rncStyles.mx1,
                    rncStyles.border1,
                    rncStyles.rounded,
                    {borderColor: '#868d95'},
                  ]}>
                  <Image source={googleLogo} />
                </View>
              </View>
            </View>
            <View style={[rncStyles.flexRow, rncStyles.justifyContentCenter]}>
              <Text
                style={[
                  rncStyles.textSecondary,
                  rncStyles.fs5,
                  {color: '#868d95'},
                ]}>
                Have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Sign In');
                }}>
                <Text
                  style={[rncStyles.fs5, rncStyles.ms1, {color: '#756ef3'}]}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .7)',
  },
});
