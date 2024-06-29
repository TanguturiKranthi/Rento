import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logo from '../images/logo.png'; // Replace with your logo image import

const TopNavbar = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
        </View>
    );
};

export default TopNavbar;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingHorizontal: 10, 
        paddingVertical: 10, 
    },
    logo: {
        height: 50, 
        width: 150, 
        resizeMode: 'contain',
    },
});
