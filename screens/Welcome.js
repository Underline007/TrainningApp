import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {sum2Number, subTract2Number, PI} from '../utilies/Calculation';
import {images, icons, fontSizes, colors} from '../constants/index';
import {UIButton} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';

// component = function
// function MainScreen(props){
//     return <Text>This is main screen</Text>
// }

// create a variabale which reference to a function

//read object, variable, function from orter modules

function Welcome(props) {
  //state => when a state is changed => UI is reload
  //like getter and setter
  const [accountTypes, setaccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: false,
    },
    {
      name: 'Bussiness',
      isSelected: false,
    },
    {
      name: 'Individual',
      isSelected: false,
    },
  ]);
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 100,
      }}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={icons.icon_fire}
              style={{
                marginStart: 10,
                marginEnd: 5,
                width: 30,
                height: 30,
              }}
            />
            <Text
              style={{
                color: 'white',
              }}>
              University of GreenWich
            </Text>
            <View style={{flex: 1}}></View>
            <Icon
              name={'question-circle'}
              size={20}
              style={{
                color: 'white',
                marginRight: 10,
              }}></Icon>
            {/* <Image
              source={icons.icon_question}
              style={{
                width: 20,
                height: 20,
                tintColor: 'white',
                marginRight: 10,
              }}
            /> */}
          </View>
        </View>

        <View
          style={{
            flex: 20,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginBottom: 7,
              color: 'white',
              fontSize: fontSizes.h6,
            }}>
            Welcome to
          </Text>
          <Text
            style={{
              marginBottom: 7,
              color: 'white',
              fontWeight: 'bold',
              fontSize: fontSizes.h5,
            }}>
            University of Greenwich
          </Text>
          <Text
            style={{
              marginBottom: 7,
              color: 'white',
              fontSize: fontSizes.h6,
            }}>
            Please select your account type
          </Text>
        </View>

        <View
          style={{
            flex: 40,
          }}>
          {accountTypes.map(accountType => (
            <UIButton
              onPress={() => {
                setaccountTypes(
                  accountTypes.map(eachAccountType => {
                    return {
                      ...eachAccountType,
                      isSelected: eachAccountType.name == accountType.name,
                    };
                  }),
                );
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>

        <View
          style={{
            flex: 20,
          }}>
          <UIButton
            onPress={() => {
              // navigate('Login');
            }}
            title={'Login'.toUpperCase()}></UIButton>
          <Text
            style={{
              fontSize: fontSizes.h6,
              alignSelf: 'center',
            }}>
            Want to register new Account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              // alert('he');
              // navigate('Register');
            }}
            style={{
              padding: 5,
            }}>
            <Text
              style={{
                color: colors.primary,
                fontSize: fontSizes.h6,
                alignSelf: 'center',
                textDecorationLine: 'underline',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
export default Welcome;
/*
const Welcome = (props) => {
    // destructuring an object
    // const => let => var
    const {x, y } = props
    const {person} = props
    const {name, age, email} = person
    const {products} = props

    


    ///JSX
    return <View style={{
        
    }}>
        <Text>Value of x = {x},Value of y = {y}</Text>
        <Text>Name = {name} ,Email = {email},Age = {age}</Text>
        {products.map(eachProduct => 
            <Text>{eachProduct.productName}, {eachProduct.year}</Text>)}

         <Text>sum 2 and 3 = {sum2Number(2,3)}</Text> 
         <Text> 10 - 8  = {subTract2Number(10,8)}</Text> 
         <Text>Pi = {PI}</Text>
    </View>
}
*/
