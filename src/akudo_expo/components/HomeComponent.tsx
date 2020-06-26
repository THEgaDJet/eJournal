import React, { useState } from 'react';
import {
    Image,
    View,
    Button,
    Text,
    TouchableHighlight,
    SafeAreaView,
    StatusBar,
} from 'react-native';

import styles from '../styles/styles';
import { AkudoButtonComponent } from './AkudoButtonComponent';

export const HomeComponent = ({ navigation }) => {
    return (
        <SafeAreaView style={[styles.containerPurple, styles.home]}>
            <StatusBar hidden={true} />
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 47,
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center"
                    }}
                >
                    <Image
                        style={styles.logo}
                        source={require('../assets/AkudoLogoTransparent/AkudoLogoTransparent@3x.png')} />
                    <Text style={styles.logoText}>
                        Akudo
                    </Text>
                </View>
                <View
                    style={{
                        flex: 53,
                        flexDirection: "column",
                        justifyContent: "flex-end"
                    }}
                >
                    <AkudoButtonComponent navigation={navigation} destination='Login' text='Log In' isPurple={false} />
                    <AkudoButtonComponent navigation={navigation} destination='Register' text='Sign Up' isPurple={false} />
                </View>
            </View>
        </SafeAreaView>
    );
};