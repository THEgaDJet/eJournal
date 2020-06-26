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

export const FilingComponent = ({ navigation }) => {
    return (
        <SafeAreaView style={[styles.containerPurple, styles.home]}>
            <StatusBar hidden={false} />
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
            </View>
        </View>
        </SafeAreaView>
    );
};