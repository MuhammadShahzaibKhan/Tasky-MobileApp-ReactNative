import {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ToastAndroid,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import rncStyles from 'rncstyles';
import SKInput from '../components/SKInput';
import SKButton from '../components/SKButton';
import {Post} from '../config/ApiMethods/ApiMethods';
import {useDispatch} from 'react-redux';
import {add} from '../config/redux/reducers/LoginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appleLogo from '../assets/images/apple-logo.png';
import googleLogo from '../assets/images/search.png';

export default function Login({navigation}: any) {
  const [isLoading, setIsLoading] = useState<any>(false);
  const [model, setModel] = useState<any>({});
  const dispatch = useDispatch();

  const loginUser = () => {
    setIsLoading(true);
    Post('/auth/login', model)
      .then((res: any) => {
        dispatch(add({...res?.data}));
        AsyncStorage.setItem('authToken', res.data.data.token);
        ToastAndroid.show('Login successfully', ToastAndroid.SHORT);
        setIsLoading(false);
        navigation.navigate('Tab');
        setModel('');
      })
      .catch(err => {
        setIsLoading(false);
        Alert.alert('Error', 'Email or Password incorrect');
      });
  };

  return (
    <>
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
              Welcome Back
            </Text>
            <Text
              style={[
                rncStyles.fs4,
                rncStyles.textSecondary,
                rncStyles.pe5,
                {color: '#b9b9bb'},
              ]}>
              Please enter your email address and password for login
            </Text>
          </View>
          <View>
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
                onPress={loginUser}
                label="Login"
                color="purple"
              />
            </View>
          </View>
          <View style={[rncStyles.alignItemsCenter]}>
            <Text style={[rncStyles.fs5, {color: '#868d95'}]}>Signin With</Text>
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
              Not Registerar yet?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Sign Up');
              }}>
              <Text style={[rncStyles.fs5, rncStyles.ms1, {color: '#756ef3'}]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
