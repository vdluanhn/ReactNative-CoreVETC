import React from 'react'
import { Header } from '../layout-temp/Header';
import { ContentArea } from '../layout-temp/ContentArea'
import { View, StyleSheet } from 'react-native';
import { Footer } from '../layout-temp/Footer';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ContentArea />
            {/* <Footer height={60} /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1, justifyContent: 'flex-start'
        , paddingBottom: 5
    }
});
export default Home;
