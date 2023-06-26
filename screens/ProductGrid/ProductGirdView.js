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
import FiveStars from './FiveStars';
import GridItem from './GridItem';

function isSaved() {

}

function ProductGirdView(props) {
    const [products, setProducts] = useState([
        {
            url: 'https://cdn.tgdd.vn/Products/Images/1990/157525/samsung-vc18m21m0vn-sv-n-1-org.jpg',
            price: 7575,
            productName: 'Samsung SC 5573',
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storage',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            url: 'https://cdn.tgdd.vn/Products/Images/1990/222602/may-hut-bui-samsung-vcc8835v37-xsv-1-300x300.jpg',
            price: 745,
            productName: 'Samsung SS 55e3',
            specifications: [
                'Dry clean',
                'cyclone filter',
                'Your home is filled with robot hazards',
            ],
            reviews: 1219,
            stars: 4,
        },
        {
            url: 'https://cdn.tgdd.vn/Products/Images/1990/197819/may-hut-bui-hitachi-cv-sf20v-24cv-bre-300x300.jpg',
            price: 838,
            productName: 'Hitachi STatda 5573',
            specifications: [
                'Top notch, built to last',
                'cyclone filter',
                'convenience cord storage',
            ],
            reviews: 129,
            stars: 3,
        },
        {
            url: 'https://cdn.tgdd.vn/Products/Images/1990/162048/electrolux-z1231-daidien-300x300.jpg',
            price: 175,
            productName: 'Miele Complete C3 Calima',
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storage',
            ],
            reviews: 12319,
            stars: 2,
        },
        {
            url: 'https://cdn.tgdd.vn/Products/Images/1990/274433/hitachi-cv-bf16-gn-240522-095951-600x600.jpg',
            price: 375,
            productName: 'Demacia Garen',
            specifications: [
                'Dyson V12 Detect Slim',
                'cyclone filter',
                'convenience cord storage',
            ],
            reviews: 193,
            stars: 1,
        },
        {
            url: 'https://cdn.tgdd.vn/Products/Images/1990/242719/dem-giuong-deerma-cm800-1-300x300.jpg',
            price: 753,
            productName: 'Hodiask DarkHole 3',
            specifications: [
                'Dry clean',
                'convenience cord storage',
                'Dyson V12 Detect Slim',
            ],
            reviews: 1931,
            stars: 3,
        },
        {
            url: 'https://cdn.tgdd.vn/Products/Images/1990/236456/electrolux-z1220-1-300x300.jpg',
            price: 7895,
            productName: 'Shark Navigator Lift-Away NV352',
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convenience cord storage',
                'You prefer uprights',

            ],
            reviews: 1319,
            stars: 5,
        },
        {
            url: 'https://d1b5h9psu9yexj.cloudfront.net/11385/Miele-Complete-C3-Calima_20180312-174635_full.jpg',
            price: 75.12321,
            productName: 'Dyson V12 Detect Slim',
            specifications: [
                'Dry clean',
                'Dyson V12 Detect Slim',
                'convenience cord storage',
                'You prefer uprights',

            ],
            reviews: 1439,
            stars: 5,
        },
        {
            url: 'https://d1b5h9psu9yexj.cloudfront.net/11385/Miele-Complete-C3-Calima_20180312-174635_full.jpg',
            price: 75.12321,
            productName: 'Lexus 132808',
            specifications: [
                'best handheld vacuums.',
                'You prefer uprights',

            ],
            reviews: 1439,
            stars: 4,
        },
        {
            url: 'https://d1b5h9psu9yexj.cloudfront.net/11385/Miele-Complete-C3-Calima_20180312-174635_full.jpg',
            price: 75.12321,
            productName: 'iRobot Roomba i4 EVO',
            specifications: [
                'Dry clean',
                'Dyson V12 Detect Slim',
                'convenience cord storage',

            ],
            reviews: 1439,
            stars: 3,
        },
        {
            url: 'https://d1b5h9psu9yexj.cloudfront.net/11385/Miele-Complete-C3-Calima_20180312-174635_full.jpg',
            price: 75.12321,
            productName: 'iRobot Roomba i4+ EVO',
            specifications: [
                'convenience cord storage',
                'Best handheld vacuum',

            ],
            reviews: 1439,
            stars: 2,
        },
    ])


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <FlatList
                style={{
                    marginTop: 5
                }}
                data={products}
                numColumns={2}
                keyExtractor={item => item.productName}
                renderItem={({ item, index }) => <GridItem
                    item={item} index={index}
                    onPress={() => {
                        let clonedProducts = products.map(eachProduct => {
                            if (item.productName == eachProduct.productName)
                                return {
                                    ...eachProduct,
                                    isSaved: eachProduct.isSaved == false || eachProduct.isSaved == undefined
                                        ? true : false
                                }
                            return eachProduct
                        })
                        setProducts(clonedProducts)
                    }}
                />}
            />
        </View >)
}

export default ProductGirdView
