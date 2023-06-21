import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {images, colors, icons, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../utilies/Validation';

function Login(props) {
  // const [keyboardIsShow, setkeyboardISShow] = useState(false);
  // useEffect(() => {
  //   //componetDidMount
  //   Keyboard.addListener('keyboardDidShow', () => {
  //     setkeyboardISShow(true);
  //   });
  //   Keyboard.addListener('keyboardDidHide', () => {
  //     //   alert('Kb Hide');
  //     setkeyboardISShow(false);
  //   });
  // });

  //state
  const [errorEmail, setErrorEmaill] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  //state to store email,password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;

  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  useEffect(() => {
    //componentDidMount
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Already have an Account?
        </Text>
        <Image
          tintColor={colors.primary}
          source={images.computer}
          style={{
            width: 120,
            height: 120,
            alignSelf: 'center',
          }}
        />
      </View>

      <View
        style={{
          flex: 30,
        }}>
        <View style={{marginHorizontal: 15}}>
          <Text
            style={{
              fontSize: fontSizes.h6,
              color: colors.primary,
            }}>
            Email:
          </Text>
          <TextInput
            onChangeText={text => {
              // if(isValidEmail(text)==false){
              //   setErrorEmaill('Email not in correct fomat')
              // } else {
              //   setEmail('')
              // }
              setErrorEmaill(
                isValidEmail(text) == true ? '' : 'Email not in correct fomat',
              );
              setEmail(text);
            }}
            style={{color: 'black'}}
            placeholder="example@gmail.com"
            placeholderTextColor={colors.placeHolder}
          />
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: colors.primary,
              marginBottom: 5,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: 'red',
              fontSize: fontSizes.h6,
              marginBottom: 15,
            }}>
            {errorEmail}
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h6,
              color: colors.primary,
            }}>
            Password:
          </Text>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must atleast 3 characters',
              );
              setPassword(text);
            }}
            style={{color: 'black'}}
            placeholder="Enter your password"
            secureTextEntry={true}
            placeholderTextColor={colors.placeHolder}
          />
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: colors.primary,
              marginBottom: 15,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: 'red',
              fontSize: fontSizes.h6,
              marginBottom: 15,
            }}>
            {errorPassword}
          </Text>
        </View>
      </View>

      {keyboardIsShown == false && (
        <View
          style={{
            flex: 15,
          }}>
          <TouchableOpacity
            disabled={isValidationOK() == false}
            onPress={() => {
              alert(`Email = ${email}, password = ${password}`);
            }}
            style={{
              backgroundColor:
                isValidationOK() == true ? colors.primary : colors.inactive,
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              alignSelf: 'center',
              borderRadius: 18,
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h5,
                color: 'white',
              }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('Press Register');
            }}
            style={{padding: 5}}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h6,
                color: colors.primary,
                alignSelf: 'center',
              }}>
              New User? Register Now!
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View
        style={{
          flex: 25,
        }}>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              flex: 1,
            }}></View>
          <Text
            style={{
              padding: 8,
              fontSize: fontSizes.h6,
              color: 'black',
              alignSelf: 'center',
              marginHorizontal: 5,
            }}>
            Use other method?
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              flex: 1,
            }}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon name="facebook" size={40} color={colors.facebook}></Icon>
          <View style={{width: 20}}></View>
          <Icon name="google" size={40} color={colors.google}></Icon>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;
