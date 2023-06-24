import React, { useEffect, useState } from 'react';
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
import { images, colors, icons, fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function _getColoFromStatus(status) {
  //   if (status.toLowerCase().trim() == 'opening now') {
  //     return colors.success;
  //   } else if (status.toLowerCase().trim() == 'closing soon') {
  //     return colors.alert;
  //   } else if (status.toLowerCase().trim() == 'comming soon') {
  //     return colors.warning;
  //   }
  return status.toLowerCase().trim() == 'opening now'
    ? colors.success
    : status.toLowerCase().trim() == 'closing soon'
      ? colors.alert
      : status.toLowerCase().trim() == 'comming soon'
        ? colors.warning
        : colors.success;
}

function FoodItem(props) {
  let { name, price, socialNetwork, status, url, website } = props.food; //destructuring an object
  const { onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 150,
        // backgroundColor: 'red',
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',
      }}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          borderRadius: 10,
          marginRight: 15,
        }}
        source={{
          uri: url,
        }}
      />
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.h6,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: colors.inactive,
              fontSize: fontSizes.h6,
            }}>
            Status:
          </Text>
          <Text
            style={{
              color: _getColoFromStatus(status),
              fontSize: fontSizes.h6,
              textTransform: 'uppercase',
            }}>
            {status}
          </Text>
        </View>
        <Text
          style={{
            color: colors.inactive,
            fontSize: fontSizes.h6,
          }}>
          Price: {price}
        </Text>
        <Text
          style={{
            color: colors.inactive,
            fontSize: fontSizes.h6,
          }}>
          FoodType: Pizza
        </Text>
        <Text
          style={{
            color: colors.inactive,
            fontSize: fontSizes.h6,
          }}>
          Website: {website}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {socialNetwork['facebook'] != undefined && (
            <Icon
              name="facebook"
              size={18}
              color={colors.inactive}
              style={{ paddingEnd: 5 }}
            />
          )}
          {socialNetwork['twitter'] != undefined && (
            <Icon
              name="twitter"
              size={18}
              color={colors.inactive}
              style={{ paddingEnd: 5 }}
            />
          )}
          {socialNetwork['instagram'] != undefined && (
            <Icon
              // style={{paddingEnd: 5}}
              name="instagram"
              size={18}
              color={colors.inactive}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default FoodItem;
