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

export const AccountingComponent = ({ navigation }) => {
    return (
        <SafeAreaView style={[styles.containerPurple, styles.home]}>
            <StatusBar hidden={true} />
            <View
            style={{
                flex: 1,
            }}
        >
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
                <TouchableHighlight style={[styles.buttonWhite, styles.buttonLogIn]}
                    onPress={() => navigation.navigate('Login', { name: 'Jane' })}
                    underlayColor={'#FFFFFF'}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}
                    >
                        <Text style={styles.buttonTextPurple}>Log In</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonWhite, styles.buttonSignUp]}
                    onPress={() => navigation.navigate('Register', { name: 'Jane' })}
                    underlayColor={'#FFFFFF'}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}
                    >
                        <Text style={styles.buttonTextPurple}>Sign Up</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
        </SafeAreaView>
    );
};