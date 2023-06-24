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
  ScrollView,
} from 'react-native';
import {images, colors, icons, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../utilies/Validation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function Resgiter(props) {
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
    <KeyboardAwareScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: colors.primary,
      }}>
      <View
        style={{
          flex: 25,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Already have an Account?
        </Text>
        <Image
          tintColor={'white'}
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
          flex: 45,
          backgroundColor: 'white',
          margin: 10,
          borderRadius: 20,
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
              marginBottom: 10,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: 'red',
              fontSize: fontSizes.h6,
              marginBottom: 10,
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
              marginBottom: 10,
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
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h6,
              color: colors.primary,
            }}>
            Retype password:
          </Text>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Retype password must atleast 3 characters',
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
              marginBottom: 5,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: 'red',
              fontSize: fontSizes.h6,
              marginBottom: 5,
            }}>
            {errorPassword}
          </Text>
        </View>
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
            marginBottom: 10,
          }}>
          <Text
            style={{
              padding: 8,
              fontSize: fontSizes.h5,
              color: 'white',
            }}>
            Regiter
          </Text>
        </TouchableOpacity>
      </View>

      {keyboardIsShown == false ? (
        <View
          style={{
            flex: 20,
          }}>
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View style={{height: 1, backgroundColor: 'white', flex: 1}} />
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h6,
                color: 'white',
                alignSelf: 'center',
                marginHorizontal: 5,
              }}>
              Use other methods ?
            </Text>
            <View style={{height: 1, backgroundColor: 'white', flex: 1}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon name="facebook" size={35} color={colors.facebook} />
            <View style={{width: 15}} />
            <Icon name="google" size={35} color={colors.google} />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 20,
          }}></View>
      )}
    </KeyboardAwareScrollView>
  );
}

export default Resgiter;
