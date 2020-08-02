import React from 'react'
import { View, Text, Image } from 'react-native'
const logoVetc = '../../../assets/images/logo.png'
export const Footer = ({ height }) => {
    return (
        <View style={{
            height: height, width: '100%', justifyContent: 'center', alignSelf: 'center',
            backgroundColor: 'transparent', alignContent: 'center', marginBottom: 30
        }}>
            <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold', marginBottom: 5 }}>Bản quyền thuộc về Công ty Cổ phần VETC</Text>
            <Image source={require(logoVetc)} style={{ width: 70, height: 30, resizeMode: 'stretch', alignSelf: 'center' }}></Image>
        </View>
    )
}
