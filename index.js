/**
 * @format
 */

import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';
import Welcome from './screens/Welcome';

let fakedProducts = [
  {
    productName: 'Iphone 14',
    year: 2018,
  },
  {
    productName: 'Iphone 54',
    year: 2019,
  },
  {
    productName: 'Iphone 16',
    year: 2020,
  },
  {
    productName: 'Iphone 17',
    year: 2023,
  },
];

// AppRegistry.registerComponent(appName,
//     () => () => <Welcome
//                     x= {5} y = {2}
//                     person ={{
//                         name: "Dzung",
//                         age: 18,
//                         email: 'dung@gmail.com',
//                     }}
//                     products = {fakedProducts}
//                     />);

AppRegistry.registerComponent(appName, () => () => <Welcome />);
