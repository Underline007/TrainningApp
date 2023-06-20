import {TouchableOpacity, Text} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../constants';

function UIButton(props) {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderColor: 'white',
        borderWidth: 1,
        height: 45,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected == true ? 'white' : null,
      }}>
      {isSelected == true && (
        <Icon
          size={20}
          name={'check-circle'}
          style={{
            color: 'green',
            position: 'absolute',
            top: 10,
            left: 10,
          }}></Icon>
      )}
      <Text
        style={{
          color: isSelected == true ? colors.primary : 'white',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default UIButton;
