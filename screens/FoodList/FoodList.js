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
import { images, colors, icons, fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { isValidEmail, isValidPassword } from '../../utilies/Validation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FoodItem from './FootItem';

/*
    -Listview from a map of object
    -Flat List

*/

function FoodList(props) {
  //list of food
  const [foods, setFoods] = useState([
    {
      name: 'Kids Learning the Food Names',
      url: 'https://www.quanngon138.com/upload/images/2_4.jpg',
      status: 'opening now',
      price: 123.68,
      website: 'https://www.vedantu.com',
      socialNetwork: {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/',
        twitter: 'https://twitter.com/',
      },
    },
    {
      name: 'Tuna Steak',
      url: 'https://www.quanngon138.com/upload/images/2_5.jpg',
      status: 'opening now',
      price: 123.68,
      website: 'https://www.vedantu.com',
      socialNetwork: {
        facebook: 'https://www.facebook.com/',
      },
    },
    {
      name: 'Hai aU Yeu Nuoc Ngot',
      url: 'https://www.quanngon138.com/upload/images/2_6.jpg',
      status: 'closing soon',
      price: 123.68,
      website: 'https://www.vedantu.com',
      socialNetwork: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
      },
    },
    {
      name: 'Pizza',
      url: 'https://www.quanngon138.com/upload/images/2_2.jpg',
      status: 'closing soon',
      price: 123.68,
      website: 'https://www.vedantu.com',
      socialNetwork: {
        facebook: 'https://www.facebook.com/',
      },
    },
    {
      name: 'Bun Tron Nam Bo',
      url: 'https://www.quanngon138.com/upload/images/2_1.jpg',
      status: 'opening now',
      price: 123.68,
      website: 'https://www.vedantu.com',
      socialNetwork: {
        instagram: 'https://www.instagram.com/',
        twitter: 'https://twitter.com/',
      },
    },
    {
      name: 'Tran Doan Dung',
      url: 'https://www.quanngon138.com/upload/images/2_1.jpg',
      status: 'comming soon',
      price: 131223.68,
      website: 'https://www.vedantu.com',
      socialNetwork: {
        instagram: 'https://www.instagram.com/',
        twitter: 'https://twitter.com/',
      },
    },
    {
      name: 'Tran Doan Dung thu 2',
      url: 'https://www.quanngon138.com/upload/images/2_1.jpg',
      status: 'comming soon',
      price: 31223.68,
      website: 'https://www.vedantu.com',
      socialNetwork: {
        instagram: 'https://www.instagram.com/',
        twitter: 'https://twitter.com/',
      },
    },
  ]);
  const [categories, setCategories] = useState([
    {
      name: 'BBQ',
      url: 'https://content.presspage.com/uploads/1369/1920_stock-photo-barbecue-grill-with-fire-on-nature-outdoor-close-up-645672055.jpg?10000'

    },
    {
      name: 'BreakFirst',
      url: 'https://ichef.bbci.co.uk/news/640/mcs/media/images/64136000/jpg/_64136308_fry_up_thinkstock.jpg'

    },
    {
      name: 'Coffee',
      url: 'https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000'

    },
    {
      name: 'Hot dogs',
      url: 'https://www.foodandwine.com/thmb/Au_zD0Qmb5sD5NWLOuktc5MPg1E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chorizo-and-kimchi-dogs-FT-RECIPE0819-74abcc92e9154e729c7e98e248daa3c7.jpg'

    },
    {
      name: 'Noodles',
      url: 'https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg'

    },
    {
      name: 'Dinner',
      url: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/06/grain-bowl-1296x728-header.jpg?w=1155&h=1528'

    },
    {
      name: 'Beverages',
      url: 'https://5.imimg.com/data5/SELLER/Default/2020/10/NP/NQ/FF/115160227/q-500x500.png'

    },
    {
      name: 'Dessert',
      url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg'
    },
    {
      name: 'Wines',
      url: 'https://static.independent.co.uk/2022/05/05/17/still%20english%20wine.jpg?width=1200'
    },
    {
      name: 'Barbecues',
      url: 'https://images.bauerhosting.com/legacy/media/6095/1684/7006/9bef/ee76/5903/GettyImages-1216196597.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill'
    },
  ])
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>

        {/* <ScrollView>
          {foods.map(eachFood => (
            <FoodItem food={eachFood} key={eachFood.name} />
          ))}
        </ScrollView> */}
        <View style={{
          height: 60,
        }}></View>
        <View
          style={{
            height: 100,
          }}>
          <View style={{ height: 1, backgroundColor: colors.inactive }} />
          <FlatList
            horizontal={true}
            keyExtractor={item => item.name}
            data={categories}
            renderItem={({ item }) => {
              return <TouchableOpacity
                onPress={() => {
                  alert(`press ${item.name}`)
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: 'cover',
                    borderRadius: 25,
                    margin: 10,
                  }}
                  source={{
                    uri: item.url,
                  }}
                />
                <Text style={{
                  color: 'black',
                  fontSize: fontSizes.h6 * 0.8,
                }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            }}
            style={{
              flex: 1,
            }}>


          </FlatList>
          <View style={{ height: 1, backgroundColor: colors.inactive }} />
        </View>
        <FlatList
          data={foods}
          renderItem={({ item }) => (
            <FoodItem
              onPress={() => {
                alert(`You press item's name: ${item.name}`);
              }}
              food={item}
              key={item.name}
            />
          )}
          keyExtractor={eachFood => eachFood.name}
        />
      </View>
    </View >
  );
}

export default FoodList;
