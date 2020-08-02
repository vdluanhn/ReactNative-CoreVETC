import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Text, Image, TouchableHighlight, Alert, Dimensions } from 'react-native'
import { Footer } from './Footer';
import { Header } from './Header';
const bgImage = '../../../assets/images/Core-Bg.jpg'

const screen = Dimensions.get('screen');
export const ContentArea = () => {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        const datas = [
            { id: 1, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/Core-Icon-12.png' },
            { id: 2, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/Core-Icon-1.jpg' },
            { id: 3, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/Core-Icon-2.jpg' },
            { id: 4, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/Core-Icon-3.jpg' },
            { id: 5, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/Core-Icon-4.jpg' },
            { id: 2, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 3, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 4, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 5, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 3, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 4, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 5, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 2, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 3, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 4, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 5, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 3, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/Core-Icon-2.jpg' },
            { id: 4, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/Core-Icon-3.jpg' },
            { id: 5, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/Core-Icon-4.jpg' },
            { id: 2, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
            { id: 3, name: 'BILLING', website: 'http://vetc.com.vn', icon: '../../../assets/images/myavatar.jpg' },
        ];

        setApps(datas);
    }, []);

    const AppItem = ({ app, index, onPress }) => {
        console.log(app.name + ':' + index);
        // console.log(screenData.height + "------width man hinh: " + screenData.width)
        console.log(isPortrait + "----clm: " + numColum + "- width = " + screenData.width + " - heigth:" + screenData.height);
        var widthItem = Math.floor(((isPortrait ? screenData.width : screenData.height) - (16 * numColum)) / (numColum));
        console.log((screenData.width - (15 * numColum)) / (numColum) + "==width item: " + widthItem);
        var imageIcon = require('../../../assets/images/myavatar.jpg');
        return (
            <TouchableHighlight onPress={onPress}>
                <View style={{
                    height: 1.2 * widthItem, width: widthItem,
                    backgroundColor: 'transparent',
                    marginVertical: 5, marginHorizontal: 5, alignSelf: 'center',
                    padding: 5,
                    justifyContent: 'space-around',
                    alignItems: 'center', alignSelf: 'center',
                }}>
                    <View style={{
                        height: 1.2 * widthItem, width: widthItem,
                        backgroundColor: 'white',
                        opacity: 0.4, alignSelf: 'center',
                        borderRadius: 0,
                        position: 'absolute',
                    }} />
                    <Image style={{
                        width: '100%', height: '85%', alignSelf: 'center', resizeMode: 'stretch',
                    }} source={imageIcon} />
                    <Text style={{
                        backgroundColor: 'transparent', marginTop: 5, height: '15%', alignItems: 'center'
                    }}>{index + 1}. {app.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }
    const onPressItem = (item) => {
        Alert.alert('lick item: ' + item.name);
    }

    const useScreenDimensions = () => {
        const [screenData, setScreenData] = useState(Dimensions.get('screen'));

        useEffect(() => {
            const onChange = result => {
                setScreenData(result.screen);
            };
            Dimensions.addEventListener('change', onChange);

            return () => Dimensions.removeEventListener('change', onChange);
        });

        return {
            ...screenData,
            isLandscape: screenData.width > screenData.height,
            numColum: screenData.width > screenData.height ? 9 : 5
        };
    };


    const screenData = useScreenDimensions();
    const [isPortrait, setIsPortrait] = useState(true);
    const [numColum, setNumColum] = useState(3);
    const onLayout = e => {
        let isPortrait1 = e.nativeEvent.layout.height > e.nativeEvent.layout.width
        if (isPortrait1 != isPortrait) {
            setIsPortrait(isPortrait1);
            let numClm = isPortrait1 ? 3 : 5;
            setNumColum(numClm);
        }
    }
    console.log(isPortrait + '-----screen main ' + numColum);
    return (
        <View style={styles.container} onLayout={onLayout}>
            <Image style={styles.imgNen} source={require(bgImage)} />
            <FlatList
                style={styles.flatList}
                data={apps}
                keyExtractor={(item, index) => item.id + '' + index}

                renderItem={({ item, index }) => (
                    <AppItem app={item} index={index} onPress={() => onPressItem(item)} />
                )}
                ListFooterComponent={() => <Footer height={70} />}
                numColumns={numColum}
                key={(isPortrait ? 'h' : 'v')}
                contentContainerStyle={{
                    alignSelf: 'center',
                    justifyContent: 'space-around',
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%', height: '95%',
        backgroundColor: 'transparent',
    },
    imgNen: {
        width: '100%', height: '100%',
        position: 'absolute',
        resizeMode: 'stretch',
    },
    flatList: {
        backgroundColor: 'transparent',
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 10
    }
})
