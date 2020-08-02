import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const imgBackground = '../../../assets/images/Core-Menu.jpg'
const logoApp = '../../../assets/images/Core-Logo-UAT-new.png'
const avatar = '../../../assets/images/myavatar.jpg'
const iconSearch = '../../../assets/icons/icons8-search-64.png'

export const Header = () => {
  const [isSearching, setIsSearching] = useState(false);

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
    };
  };


  const screenData = useScreenDimensions();
  const isIOS = Platform.OS === 'ios';
  console.log(isIOS + '---------man hinh--------- ' + screenData.isLandscape);
  return (
    < View style={!screenData.isLandscape && !isIOS ? styles.containerLandscape : styles.container} >
      <ImageBackground style={styles.header} source={require(imgBackground)}>
        <Image style={styles.logoApp} source={require(logoApp)}></Image>
        <View style={styles.viewChild}>
          <TouchableOpacity
            onPress={() => {
              setIsSearching(!isSearching);
              isSearching
                ? Alert.alert('hello searching true')
                : Alert.alert('hello');
            }}>
            <Image
              style={styles.searchIcon}
              source={require(iconSearch)}></Image>
          </TouchableOpacity>
          <Image style={styles.iconMenu} source={require(avatar)}></Image>
        </View>
      </ImageBackground>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: '100%',
    backgroundColor: 'green'
  },
  containerLandscape: {
    height: 60,
    width: '100%',
    backgroundColor: 'green'
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  logoApp: {
    height: 40,
    maxWidth: 190,
    alignSelf: 'flex-end',
    marginHorizontal: 5,
    marginVertical: 10,
    resizeMode: 'stretch',
  },
  viewChild: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  iconMenu: {
    height: 40,
    width: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center',
    marginLeft: 10,
    resizeMode: 'stretch',
    marginVertical: 0,
  },
  searchIcon: {
    height: 40,
    width: 40,
    marginLeft: 10,
    resizeMode: 'center',
  },
});
