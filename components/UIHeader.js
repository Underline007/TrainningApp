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
    FlatList,
    Alert,
} from 'react-native';
import { images, colors, icons, fontSizes } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function UIHeader(props) {
    const { title } = props
    return <View style={{
        height: 55,
        backgroundColor: colors.primary
    }}>
        <Text style={{
            fontSize: fontSizes.h5,
            alignSelf: 'center',
            lineHeight: 55,

        }}>{title}</Text>
    </View>
}
export default UIHeader